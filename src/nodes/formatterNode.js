// formatterNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const FormatterNode = ({ id, data }) => {
  const content = (
    <>
      <div>
        <span>This is a Formatter.</span>
      </div>
    </>
  );

  return (
    <BaseNode
      title="Formatter"
      content={content}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-format`,
        },
        { type: "source", position: Position.Right, id: `${id}-formatsystem` },
      ]}
    ></BaseNode>
  );
};
