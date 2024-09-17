// submit.js
import { useStore } from "./store";
import { toast } from "react-toastify";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_URL}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.detail);
        throw new Error("Network response was not ok");
      } else {
        const message = `This is ${
          result.is_dag ? "" : "NOT"
        } a Direct Acyclic Graph(DAG) with ${result.num_edges} Edges and ${
          result.num_nodes
        } Nodes`;
        if (result.is_dag) toast.success(message, { theme: "dark" });
        else toast.error(message, { theme: "dark" });
      }
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
