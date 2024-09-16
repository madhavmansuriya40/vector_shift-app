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
      id={id}
      title="Validator"
      content={content}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: id + "-prompt",
        },
        { type: "source", position: Position.Right, id: id + "-system" },
      ]}
    ></BaseNode>
  );
};
