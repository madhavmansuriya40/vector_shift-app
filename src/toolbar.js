// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px", background: "#0b0518" }}>
      <div
        style={{
          justifyContent: "center",
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="transformer" label="Transformer" />
        <DraggableNode type="aggregator" label="Aggregator" />
        <DraggableNode type="validator" label="Validator" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="formatter" label="Formatter" />
        <DraggableNode type="customOutput" label="Output" />
      </div>
    </div>
  );
};
