// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        padding: "8px 16px",
        cursor: "grab",
        minWidth: "80px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        border: "1px solid #b67cf9",
        color: "#b67cf9",
        justifyContent: "center",
        flexDirection: "column",
      }}
      draggable
    >
      <span>{label}</span>
    </div>
  );
};
