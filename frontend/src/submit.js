import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();

      alert(
        `Pipeline Parsed ✅\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${
          data.is_dag ? "Yes ✅" : "No ❌"
        }`,
      );
    } catch (err) {
      alert("Backend error. Make sure the server is running.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          border: "none",
          background: "#111",
          color: "white",
          cursor: "pointer",
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
