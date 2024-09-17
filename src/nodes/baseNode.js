// BaseNode.js

import React from "react";
import { Handle } from "reactflow";

import "./node.css";

/**
 * BaseNode component to handle shared functionality across different node types.
 *
 * @param {Object} props - Properties passed to the component
 * @param {string} props.id - Unique node identifier
 * @param {string} props.title - Title to display on the node
 * @param {React.ReactNode} props.content - Custom content specific to each node
 * @param {Array} props.handles - Array of handle configurations
 */
export const BaseNode = ({ id, title, content, handles }) => {
  return (
    <div className="node">
      <div className="node-title">
        <strong>{title}</strong>
      </div>
      <div className="node-content">{content}</div>
      {handles.map((handleConfig, idx) => {
        return (
          <Handle
            key={idx}
            type={handleConfig.type}
            position={handleConfig.position}
            id={`${handleConfig.id}`}
            style={handleConfig.style || {}}
          />
        );
      })}
    </div>
  );
};
