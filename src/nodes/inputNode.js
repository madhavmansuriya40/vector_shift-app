// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const content = (
    <>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </>
  );

  return (
    <>
      <BaseNode
        id={id}
        title="Input"
        content={content} // content are kept on the same page as we need to handle the events
        handles={[{ type: "source", position: Position.Right, id: "value" }]}
      ></BaseNode>
    </>
  );
};
