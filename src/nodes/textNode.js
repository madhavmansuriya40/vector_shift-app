// textNode.js

import { useState, useEffect, useMemo } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [currText, setCurrText] = useState(data?.text || "Value");
  const [inputWidth, setInputWidth] = useState("auto");
  const isValidJSVariable = (str) =>
    /^\{\{\s*[a-zA-Z_$][a-zA-Z_$0-9]*\s*\}\}$/.test(str);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    updateNodeInternals(id);
  };

  const handles = useMemo(
    () => [
      ...(isValidJSVariable(currText)
        ? [
            {
              type: "target",
              position: Position.Left,
              id: `${id}-texInput`,
            },
          ]
        : []),
      {
        type: "source",
        position: Position.Right,
        id: `${id}-texOutput`,
      },
    ],
    [currText, id]
  );

  const adjustWidth = () => {
    const minWidth = 100;
    const extraWidthPerChar = 10;
    const textLength = currText.length;
    if (textLength > 10) {
      setInputWidth(
        Math.max(minWidth, minWidth + (textLength - 20) * extraWidthPerChar) +
          "px"
      );
    } else {
      setInputWidth(minWidth + "px");
    }
  };

  useEffect(() => {
    adjustWidth();
  }, [currText]);

  const content = (
    <>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
            style={{ width: inputWidth }}
          />
        </label>
      </div>
    </>
  );

  return <BaseNode title="Text" content={content} handles={handles}></BaseNode>;
};
