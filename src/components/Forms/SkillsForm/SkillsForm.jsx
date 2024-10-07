import useFormData from "@hooks/useFormData.js";
import FormActions from "@components/SharedComponents/FormActions.jsx";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";

export default function SkillsForm({ skillsData, toggleForm, setFormData }) {
  const { formData, handleFormChange, handleFormClear } = useFormData(skillsData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    toggleForm();
  };

  return (
    <div className="seprator">
      <FormContainer>
        <form id="skills-forms" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="skills" className="skills-input">
            <span>Skills:</span>
            <textarea
              id="skills"
              name="skills"
              type="text"
              value={formData}
              onChange={handleFormChange}
              required
            />
          </label>
          <FormActions onCancel={toggleForm} onClear={handleFormClear} />
        </form>
      </FormContainer>
    </div>
  );
}
