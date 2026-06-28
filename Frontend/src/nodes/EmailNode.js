import { useState } from "react";
import { Position } from "reactflow";
import { BasicNode } from "../components/BasicNode";

export const EmailNode = ({ id }) => {
  const [email, setEmail] = useState("");

  return (
    <BasicNode
      title="Email"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-message`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-status`,
        },
      ]}
    >
      <label>
        To:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
    </BasicNode>
  );
};
