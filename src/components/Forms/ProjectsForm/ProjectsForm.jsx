import useFormData from "@hooks/useFormData.js";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import FormActions from "@components/SharedComponents/FormActions.jsx";

export default function ProjectsForm({ projectsData, toggleForm, setFormData }) {
  const { formData, handleFormChange, handleFormClear } = useFormData(projectsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    toggleForm();
  };

  return (
    <div className="separator">
      <FormContainer>
        <form id="projects-form" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="projects" className="projects-input">
            <span>Projects:</span>
            <textarea
              id="projects"
              name="projects"
              onChange={handleFormChange}
              value={formData}
              type="text"
              required
            />
          </label>
          <FormActions onClear={handleFormClear} onCancel={toggleForm} />
        </form>
      </FormContainer>
    </div>
  );
}
