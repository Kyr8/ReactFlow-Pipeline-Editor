import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, children, inputs = [], outputs = [] }) => {
  return (
    <div
      style={{
        minWidth: 230,
        padding: "12px",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        background: "linear-gradient(#fff, #fafafa)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontWeight: 600,
          marginBottom: "10px",
          fontSize: "14px",
        }}
      >
        {title}
      </div>

      <div>{children}</div>

      {inputs.map((h, i) => (
        <Handle
          key={h}
          type="target"
          position={Position.Left}
          id={h}
          style={{
            top: 55 + i * 22,
            background: "#555",
          }}
        />
      ))}

      {outputs.map((h, i) => (
        <Handle
          key={h}
          type="source"
          position={Position.Right}
          id={h}
          style={{
            top: 55 + i * 22,
            background: "#111",
          }}
        />
      ))}
    </div>
  );
};
