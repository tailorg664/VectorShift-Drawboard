import { useState } from "react";
import { Position } from "reactflow";
import { BasicNode } from "../components/BasicNode";

export const DatabaseNode = ({ id }) => {
  const [db, setDb] = useState("MongoDB");

  return (
    <BasicNode
      title="Database"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-query`,
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-result`,
        },
      ]}
    >
      <label>
        Database:
        <select value={db} onChange={(e) => setDb(e.target.value)}>
          <option>MongoDB</option>
          <option>PostgreSQL</option>
          <option>MySQL</option>
        </select>
      </label>
    </BasicNode>
  );
};
