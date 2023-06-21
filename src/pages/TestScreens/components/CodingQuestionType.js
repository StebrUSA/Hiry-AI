import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import TestResults from "./TestResultsUI";

const CodingQuestionType = () => {
  const onChange = React.useCallback((value) => {
    console.log("value:", value);
  }, []);

  return (
    <CodeMirror
      className="code-editor"
      // height="600px"
      value=""
      onChange={onChange}
    />
  );
};

export default CodingQuestionType;
