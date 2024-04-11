const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [3, 'Minimum 3 letters required'],
      maxlength: [20, 'Maximum 20 letters allowed'],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, 'Minimum 3 letters required'],
      maxlength: [20, 'Maximum 20 letters allowed'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
)

SignupSchema.post('save', (error, doc, next) => {
  if (error.code === 11000) {
    next({ code: 400, message: 'Phone number should be unique !' })
  } else {
    next(error)
  }
})

const Signup = mongoose.model('users', SignupSchema)

module.exports = Signup
