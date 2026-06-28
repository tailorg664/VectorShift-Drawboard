import { useState } from "react";
import { Position } from "reactflow";
import { BasicNode } from "../components/BasicNode";

export const APINode = ({ id, data }) => {
      const [endpoint, setEndpoint] = useState(data?.endpoint || "");
  

  return (
    <BasicNode
      title="API"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-request`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <label>
        Endpoint:
        <input value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
      </label>
    </BasicNode>
  );
};
