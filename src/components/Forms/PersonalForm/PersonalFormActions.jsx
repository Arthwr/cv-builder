export default function PersonalFormActions({ onCancel }) {
  return (
    <div className="form-actions">
      <button>Clear</button>
      <button onClick={onCancel}>Cancel</button>
      <button>Save</button>
    </div>
  );
}
