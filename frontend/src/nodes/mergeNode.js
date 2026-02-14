import { BaseNode } from "./baseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      inputs={[`${id}-in1`, `${id}-in2`]}
      outputs={[`${id}-out`]}
    >
      <div style={{ fontSize: "13px" }}>Merge</div>
    </BaseNode>
  );
};
