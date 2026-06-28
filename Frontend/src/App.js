import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <PipelineUI />

      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1000,
        }}
      >
        <PipelineToolbar />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
