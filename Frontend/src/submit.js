// submit.js

export const SubmitButton = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
        console.log("Form submitted!");
    }
    return (
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
        }}
      >
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            background: "#121c2f",
            color: "#ffffff",
            border: "none",
            borderRadius: "20px",
            padding: "12px 18px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(18, 28, 47, 0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#1d2b47";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#121c2f";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Submit
        </button>
      </div>
    );
}
