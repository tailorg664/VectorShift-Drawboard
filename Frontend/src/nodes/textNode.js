// textNode.js

import { useState } from 'react';
import {BasicNode} from "../components/BasicNode";
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'input text');


  return (
    <BasicNode
      title="Text"
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Text:
        <input
          type="text"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </label>
    </BasicNode>
  );
}
