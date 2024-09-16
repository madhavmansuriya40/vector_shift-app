// llmNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  const content = (
    <>
      <div>
        <span>This is a LLM.</span>
      </div>
    </>
  );

  return (
    <BaseNode
      id={id}
      title="LLM"
      content={content}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: id + "-system",
          style: { top: "33%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: id + "-prompt",
          style: { top: "33%" },
        },
        { type: "source", position: Position.Right, id: id + "-response" },
      ]}
    ></BaseNode>
  );
};
