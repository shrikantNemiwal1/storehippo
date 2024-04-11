const Signup = require("../models/signup");
const ErrorClass = require("../services/error");
const { validateRequest, generateToken } = require("../services/common.utils");
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
const {
  MESSAGES: { ERROR, SUCCESS },
} = require("../constants/constant");

module.exports.login = async (req, res, next) => {
  try {
    const isInvalidRequest = validateRequest(req.body, {
      email: true,
      password: true,
    });
    if (isInvalidRequest) {
      throw new ErrorClass(ERROR.INVALID_REQ, 400);
    }
    const { email, password } = req.body;

    const isUserExits = await Signup.findOne({
      email,
    });
    if (!isUserExits) {
      throw new ErrorClass(ERROR.INVALID_USER, 404);
    }
    const passwordMatch = password === isUserExits.password;
    if (!passwordMatch) {
      throw new ErrorClass(ERROR.INVALID_CREDENTIAL, 400);
    }
    const now = new Date();

    // Add 60 minutes to the current time
    let tokenExpTime = new Date(now.getTime() + 60 * 60 * 1000);

    // Output the future time

    const token = generateToken(isUserExits);

    // Update user document with new token if not already present
    await Signup.findOneAndUpdate(
      { email: req.body?.email },
      { $addToSet: { token } }
    );

    res.status(200).send({
      message: SUCCESS.USER_LOGGEDIN,
      data: {
        email,
        token,
        firstName: isUserExits?.firstName,
        lastName: isUserExits?.lastName,
        tokenExpTime,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports.signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isInvalidRequest = validateRequest(req.body, {
      firstName: true,
      lastName: true,
      password: true,
      email: true,
    });

    if (isInvalidRequest) {
      throw new ErrorClass(ERROR.INVALID_REQ, 400);
    }
    const isUserExits = await Signup.findOne({
      email,
    });
    if (isUserExits) {
      throw new ErrorClass(ERROR.USER_EXIST, 409);
    }
    if (!passwordRegex.test(password)) {
      throw new ErrorClass(ERROR.PASSWORD_VALIDATION, 400);
    }

    const userData = {
      ...req.body,
    };

    if (isUserExits) {
      await Signup.findOneAndUpdate({ email }, userData);
    } else {
      const insertData = new Signup(userData);
      await insertData.save();
    }

    res.send({ message: SUCCESS.USER_SIGNIN, email, status: 202 });
  } catch (err) {
    next(err);
  }
};

module.exports.logout = async (req, res, next) => {
  try {
    await Signup.findOneAndUpdate(
      { email: req.user?.email },
      { $pull: { token: req?.token } }
    );
    res.json({ message: SUCCESS.LOGOUT_SUCCESSFUL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: ERROR.INTERNAL_SERVER_ERROR });
  }
};
