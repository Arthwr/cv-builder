export default function ExperienceFormActions({ onCancel, onSave, onAddition }) {
  return (
    <div className="form-actions">
      <button type="button" onClick={onAddition}>
        Add More
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" onClick={onSave}>
        Save
      </button>
    </div>
  );
}
