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
      title="Aggregator"
      content={content}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-aggri`,
        },
        { type: "source", position: Position.Right, id: `${id}-agrisys` },
      ]}
    ></BaseNode>
  );
};
