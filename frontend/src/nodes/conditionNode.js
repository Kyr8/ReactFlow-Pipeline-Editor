import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[`${id}-value`]}
      outputs={[`${id}-true`, `${id}-false`]}
    >
      <div style={{ fontSize: "13px" }}>Branch logic</div>
    </BaseNode>
  );
};
