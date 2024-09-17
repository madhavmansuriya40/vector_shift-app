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
      title="Filter"
      content={content}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-filtprompt`,
        },
        { type: "source", position: Position.Right, id: `${id}-filtsystem` },
      ]}
    ></BaseNode>
  );
};
