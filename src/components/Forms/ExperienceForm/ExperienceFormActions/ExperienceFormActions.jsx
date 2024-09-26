export default function ExperienceFormActions({ onCancel, onSave }) {
  return (
    <div className="form-actions">
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="button" onClick={onCancel}>Add</button>
      <button type="button" onClick={onSave}>Save</button>
    </div>
  );
}
