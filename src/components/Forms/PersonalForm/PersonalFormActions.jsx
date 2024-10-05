export default function PersonalFormActions({ onCancel, onClear }) {
  return (
    <div className="form-actions">
      <button type="button" onClick={onClear}>Clear</button>
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="submit">Save</button>
    </div>
  );
}
