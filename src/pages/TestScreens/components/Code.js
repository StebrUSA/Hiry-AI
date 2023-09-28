import React, { useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { javascript } from "@codemirror/lang-javascript";
import TestResultsUI from "./TestResultsUI";

const CodingQuestionType = () => {
  const [code, setCode] = useState("");

  const isCodeEmpty = () => {
    return code.trim() === "";
  };

  return (
    <>
      <CodeMirror
        className="code-editor border"
        value={code}
        theme={eclipse}
        onChange={(value) => setCode(value)} // Update the code state
        extensions={[javascript({ jsx: true })]}
      />

      <TestResultsUI isCodeEmpty={isCodeEmpty()} code={code} />
    </>
  );
};

export default CodingQuestionType;
