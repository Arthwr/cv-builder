export default function PersonalFormActions({ onCancel, onClear }) {
  return (
    <div className="form-actions">
      <button onClick={onClear}>Clear</button>
      <button onClick={onCancel}>Cancel</button>
      <button type="submit">Save</button>
    </div>
  );
}
