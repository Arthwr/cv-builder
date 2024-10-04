import useFormData from "@hooks/useFormData.js";
import generateRandomId from "@utils/generateRandomId.js";
import removeIconUrl from "@assets/icons/removeSectionIcon.svg";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import EducationFormInput from "@components/Forms/EducationForm/EducationFormInput.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";

export default function EducationForm({ data, toggleForm, setData }) {
  const { formData, setFormData, handleFormClear, handleFormReset, handleFormChange } = useFormData(data);

  const handleCancel = () => {
    handleFormReset();
    toggleForm();
  };

  const handleItemRemoval = (id) => {
    setFormData((prevFormData) => prevFormData.filter((item) => item.id !== id));
  };

  const handleEduAddition = () => {
    setFormData((prevFormData) => [
      ...prevFormData,
      {
        id: generateRandomId(),
        degree: "Nulla malesuada, sem",
        institution: "Curabitur eget mollis",
        location: "Curabitur eros",
        year: "Ut egestas",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(formData);
    toggleForm();
  };

  return (
    <div className="separator">
      <FormContainer>
        <form id="education-form" className="form-group" onSubmit={handleSubmit}>
          {formData.map((item, index) => (
            <div className="education-form-group" key={item.id}>
              <span>{index + 1}.</span>
              <EducationFormInput data={item} index={index} onChange={handleFormChange} />
              <SectionButton
                iconUrl={removeIconUrl}
                label={"remove"}
                className={"action-icon"}
                onClick={() => handleItemRemoval(item.id)}
              />
            </div>
          ))}
          <div className="form-actions">
            <button type="button" className="add-btn" onClick={handleEduAddition}>
              Add More
            </button>
            <button type="button" onClick={handleFormClear}>
              Clear
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </FormContainer>
    </div>
  );
}
