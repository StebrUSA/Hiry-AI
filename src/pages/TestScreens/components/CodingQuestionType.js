import React from 'react';
import CodeMirror from "@uiw/react-codemirror";

const CodingQuestionType = () => {
  const onChange = React.useCallback((value) => {
    console.log("value:", value);
  }, []);

  return (
    <CodeMirror height='760px' value="" onChange={onChange} />
  )
}

export default CodingQuestionType