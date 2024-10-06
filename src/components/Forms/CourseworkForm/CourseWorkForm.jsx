import useFormData from "@hooks/useFormData.js";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import FormActions from "@components/SharedComponents/FormActions";

export default function CourseWorkForm({ courseworkData, toggleForm, setFormData }) {
  const { formData, handleFormChange, handleFormClear } = useFormData(courseworkData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    toggleForm();
  };

  return (
    <div className="separator">
      <FormContainer>
        <form id="coursework-form" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="coursework" className="coursework-input">
            <span>Coursework:</span>
            <textarea
              id="coursework"
              name="coursework"
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
