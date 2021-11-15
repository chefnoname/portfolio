import { useRef, useEffect } from "react";
import { attachToElement } from "codemirror-console-ui";
import questions from "./Questions/questions";

// const codeBlock = document.querySelector("code");

// console.log(questions, "codemirror");
console.log(questions, "codemirror");
// console.log("hiiii");

const CodeMirrorConsole = () => {
  const codeRef = useRef();

  const index = {
    zIndex: 110,
  };

  useEffect(() => {
    attachToElement(codeRef.current, questions.palindromeChecker, {
      state: "open", // open or closed
      scrollIntoView: true,
    });
  }, []);

  return (
    <div className="codeMirrorConsole">
      <code ref={codeRef}></code>
    </div>
  );
};

export default CodeMirrorConsole;
