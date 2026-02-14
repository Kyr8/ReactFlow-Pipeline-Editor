import { BaseNode } from "./baseNode";

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API Request"
      inputs={[`${id}-url`]}
      outputs={[`${id}-response`]}
    >
      <div style={{ fontSize: "13px" }}>Fetches data</div>
    </BaseNode>
  );
};
