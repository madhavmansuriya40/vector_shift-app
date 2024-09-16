// filterNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const FilterNode = ({ id, data }) => {
  const content = (
    <>
      <div>
        <span>This is a Filter.</span>
      </div>
    </>
  );

  return (
    <BaseNode
      id={id}
      title="Filter"
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
