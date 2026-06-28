import { useState } from "react";
import { Position } from "reactflow";
import { BasicNode } from "../components/BasicNode";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(5);

  return (
    <BasicNode
      title="Delay"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Seconds:
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </label>
    </BasicNode>
  );
};
