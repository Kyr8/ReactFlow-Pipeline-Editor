import { useState } from "react";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );

  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode title="Output" inputs={[`${id}-value`]}>
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
              boxSizing: "border-box",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label style={{ fontSize: "13px" }}>
          Type:
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{
              width: "100%",
              marginTop: "2px",
              padding: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
