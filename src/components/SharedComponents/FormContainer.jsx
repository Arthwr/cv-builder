export default function FormContainer({ children }) {
  return (
    <div className="form-container no-print">
      <div className="form-wrapper">{children}</div>
    </div>
  );
}
