// validatorNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ValidatorNode = ({ id, data }) => {
  const content = (
    <>
      <div>
        <span>This is a Validator.</span>
      </div>
    </>
  );

  return (
    <BaseNode
      title="Validator"
      content={content}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-validPrompt`,
        },
        { type: "source", position: Position.Right, id: `${id}-validSystem` },
      ]}
    ></BaseNode>
  );
};
