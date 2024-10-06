export default function FormActionsWithAddBtn ({ onAddition, onClear, onCancel }) {
  return (
    <div className="form-actions">
      <button type="button" className="add-btn" onClick={onAddition}>
        Add More
      </button>
      <button type="button" onClick={onClear}>
        Clear
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </div>
  );
}
