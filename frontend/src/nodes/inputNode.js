import { useState } from "react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode title="Input" outputs={[`${id}-value`]}>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontSize: "13px" }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              width: "100%",
              marginTop: "2px",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </label>

        <label style={{ fontSize: "13px" }}>
          Type:
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={{
              width: "100%",
              marginTop: "2px",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
