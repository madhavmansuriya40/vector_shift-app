// toolbar.js

import { useState, useEffect } from "react";
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const [isOnline, setIsOnline] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const healthCheck = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        console.log(response.data); // Handle the response
        if (response.ok) {
          setIsOnline(true);
        } else {
          setIsOnline(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call API every 5 minutes (300000 ms)
    const intervalId = setInterval(healthCheck, 300000);

    // Call the API immediately when the component mounts
    healthCheck();

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="toolbar">
      <div className="server-status-container">
        <div className="server-status">
          <div style={{ cursor: isOnline ? "default" : "pointer" }}>
            Server Status: {isOnline ? "Online" : "Connecting"}
          </div>
          <div
            className="server-status-light"
            style={{
              backgroundColor: isOnline ? "green" : "red",
            }}
          />
        </div>
      </div>
      <div className="toolbar-options">
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
