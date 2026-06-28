import { useState } from "react";
import { Position } from "reactflow";
import { BasicNode } from "../components/BasicNode";

export const ImageNode = ({ id, data }) => {
      const [format, setFormat] = useState(data?.format || "PNG");
  return (
    <BasicNode
      title="Image"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        { type: "source", position: Position.Right, id: `${id}-output` },
      ]}
    >
      <label>
        Format:
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option>PNG</option>
          <option>JPG</option>
          <option>SVG</option>
        </select>
      </label>
    </BasicNode>
  );
};
