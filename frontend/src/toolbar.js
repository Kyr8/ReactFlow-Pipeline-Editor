import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "14px",
        background: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />

        <DraggableNode type="math" label="Math" />
        <DraggableNode type="timer" label="Timer" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="api" label="API" />
      </div>
    </div>
  );
};
