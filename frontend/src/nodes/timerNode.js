import { BaseNode } from "./baseNode";

export const TimerNode = ({ id }) => {
  return (
    <BaseNode title="Timer" outputs={[`${id}-done`]}>
      <div style={{ fontSize: "13px" }}>Wait step</div>
    </BaseNode>
  );
};
