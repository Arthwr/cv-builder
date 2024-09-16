export default function ResumeContainer({ isEditMode, children }) {
  return <div className={`resume-container ${isEditMode ? "active" : ""}`}>{children}</div>;
}
