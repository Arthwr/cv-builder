export default function EditModeSwitch({ toggleEditing }) {
  return (
    <div className="edit-mode-container">
      <span>Edit Mode</span>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" className="switch-input" onChange={toggleEditing} />
          <span className="switch-slider"></span>
        </label>
      </div>
    </div>
  );
}
