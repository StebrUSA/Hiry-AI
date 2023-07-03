import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { javascript } from "@codemirror/lang-javascript";

const CodingQuestionType = () => {
  const prefillCode = `
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}
`;
  const onChange = React.useCallback((value) => {
    console.log("value:", value);
  }, []);

  return (
    <>
      <CodeMirror
        className="code-editor border"
        // height="600px"

        value={prefillCode}
        theme={eclipse}
        onChange={onChange}
        extensions={[javascript({ jsx: true })]}
      />
    </>
  );
};

export default CodingQuestionType;
