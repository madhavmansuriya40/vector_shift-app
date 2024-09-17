// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const API_URL = process.env.REACT_APP_API_URL;
  console.log("\n\n\n API_URL --> ", API_URL);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_URL}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="submit-container">
      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
