import { BaseNode } from "./baseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div style={{ fontSize: "13px", color: "#444" }}>This is an LLM.</div>
    </BaseNode>
  );
};
