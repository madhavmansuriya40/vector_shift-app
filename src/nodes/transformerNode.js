// transformerNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TransformerNode = ({ id, data }) => {
  const content = (
    <>
      <div>
        <span>This is a Transformer.</span>
      </div>
    </>
  );

  return (
    <BaseNode
      id={id}
      title="Transformer"
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
