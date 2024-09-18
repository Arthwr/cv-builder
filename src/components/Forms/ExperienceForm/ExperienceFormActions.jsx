export default function ExperienceFormActions({ onCancel }) {
  return (
    <div className="form-actions">
      <button onClick={onCancel}>Cancel</button>
      <button>Save</button>
    </div>
  );
}
