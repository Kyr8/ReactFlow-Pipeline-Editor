import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[`${id}-a`, `${id}-b`]}
      outputs={[`${id}-result`]}
    >
      <div style={{ fontSize: "13px" }}>Add variables</div>
    </BaseNode>
  );
};
