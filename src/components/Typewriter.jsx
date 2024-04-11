import { useState, useEffect, useRef } from "react";

const TypeWriter = (props) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const delta = useRef(100);

  useEffect(() => {
    const tick = () => {
      const { data: toRotate } = props;
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      let newText = "";
      if (isDeleting) newText = fullTxt.substring(0, text.length - 1);
      else newText = fullTxt.substring(0, text.length + 1);

      if (delta.current > 100 && isDeleting) {
        delta.current = 50;
      }

      if (!isDeleting && newText === fullTxt) {
        delta.current = 1000;
        setIsDeleting(true);
      } else if (isDeleting && newText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta.current = 100;
      }

      setText(newText);
    };

    const timer = setTimeout(() => {
      tick();
    }, delta.current);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, props]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setText("");
    }, 1000);

    return () => clearTimeout(initialDelay);
  }, []);

  return <span className="typewriter">{text}</span>;
};

export default TypeWriter;
