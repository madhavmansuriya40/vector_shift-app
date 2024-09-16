// aggregatorNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const AggregatorNode = ({ id, data }) => {
  const content = (
    <>
      <div>
        <span>This is a Aggregator.</span>
      </div>
    </>
  );

  return (
    <BaseNode
      id={id}
      title="Aggregator"
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
