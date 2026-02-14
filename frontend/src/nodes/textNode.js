import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [currText]);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

    const matches = [...currText.matchAll(regex)].map((m) => m[1]);
    const uniqueVars = [...new Set(matches)];

    setVariables(uniqueVars);
  }, [currText]);

  return (
    <div
      style={{
        minWidth: 240,
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        background: "white",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      <div style={{ fontWeight: "600", marginBottom: "8px" }}>Text Node</div>

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Type something like {{input}}..."
        style={{
          width: "100%",
          boxSizing: "border-box",
          resize: "none",
          overflow: "hidden",
          borderRadius: "6px",
          border: "1px solid #ccc",
          padding: "8px",
          fontSize: "14px",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{
          top: "50%",
          background: "#555",
        }}
      />

      {variables.map((v, index) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{
            top: 70 + index * 22,
            background: "#555",
          }}
        />
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          top: "50%",
          background: "#111",
        }}
      />
    </div>
  );
};
