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
    <>
      <BaseNode
        title="LLM"
        content={content}
        handles={[
          {
            type: "target",
            position: Position.Left,
            id: `${id}-llmSystem`,
            style: { top: "33%" },
          },
          {
            type: "target",
            position: Position.Left,
            id: `${id}-llmPrompt`,
            style: { top: "66%" },
          },
          {
            type: "source",
            position: Position.Right,
            id: `${id}-llmResponse`,
          },
        ]}
      ></BaseNode>
    </>
  );
};
