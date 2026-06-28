import { Handle } from "reactflow";
export const BasicNode = ({
  title,
  width = 200,
  height = 80,
  children,
  handles = [],
}) => {
  console.log("handles", handles);
  console.log("children", children);

  return (
    <div
      style={{
        width,
        height,
        border: "1px solid black",
        borderRadius: 6,
        padding: 10,
      }}
    >
      <div>
        <strong>{title}</strong>
      </div>
      <div>{children}</div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
        />
      ))}
    </div>
  );
};
