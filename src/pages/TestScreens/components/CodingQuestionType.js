import React, { useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { javascript } from "@codemirror/lang-javascript";
import TestResultsUI from "./TestResultsUI";
import { sendUserCode } from "./api";

const baseUrl = "http://140.82.50.243:8080";

const CodingQuestionType = () => {
  const prefillCode = "console.log('hello world!');";
  const [code, setCode] = useState(prefillCode);
  const [result, setResult] = useState(null);

  const handleRunClick = async () => {
    try {
      const finalcode = code;
      const apiResult = await sendUserCode(finalcode); // Call your API function
      // Handle the result from the API if needed

      setResult(apiResult);
      console.log(result, "result1");
    } catch (error) {
      console.error("Error running code:", error);
      // Handle the error if needed
    }
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

      <TestResultsUI handleRunClick={handleRunClick} result={result} />
      {/*  {result !== null && (
        <div className="result-container">
          <h2>API Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )} */}
    </>
  );
};

export default CodingQuestionType;
