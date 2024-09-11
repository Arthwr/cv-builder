export default function EditModeSwitch() {
  const handleSwitchChange = (event) => {
    document.querySelectorAll(".resume-container").forEach((container) => {
      container.classList.toggle("active", event.target.checked);
    });
  };

  return (
    <div className="edit-mode-container">
      <span>Edit Mode</span>
      <div className="switch-container">
        <label className="switch">
          <input type="checkbox" className="switch-input" onChange={handleSwitchChange} />
          <span className="switch-slider"></span>
        </label>
      </div>
    </div>
  );
}
