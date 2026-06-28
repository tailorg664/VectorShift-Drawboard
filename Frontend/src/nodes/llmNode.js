import { Position } from "reactflow";
import { BasicNode } from "../components/BasicNode";

export const LLMNode = ({ id }) => {
  return (
    <BasicNode
      title="LLM"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          style: { top: "33%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          style: { top: "66%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <span>This is an LLM.</span>
    </BasicNode>
  );
};
