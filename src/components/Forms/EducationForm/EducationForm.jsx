import useFormData from "@hooks/useFormData.js";
import removeIconUrl from "@assets/icons/removeSectionIcon.svg";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import EducationFormInput from "@components/Forms/EducationForm/EducationFormInput.jsx";
import FormActions from "@components/SharedComponents/FormActions.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";

export default function EducationForm({ data, toggleForm }) {
  const { formData, handleFormClear, handleFormReset, handleFormChange } = useFormData(data);

  const handleCancel = () => {
    handleFormReset();
    toggleForm();
  };

  return (
    <div className="separator">
      <FormContainer>
        <form id="education-form" className="form-group">
          {formData.map((item, index) => (
            <div className="education-form-group" key={item.id}>
              <span>{index + 1}.</span>
              <EducationFormInput data={item} index={index} onChange={handleFormChange} />
              <SectionButton iconUrl={removeIconUrl} label={"remove"} className={"action-icon"} />
            </div>
          ))}
          <FormActions onClear={handleFormClear} onCancel={handleCancel} />
        </form>
      </FormContainer>
    </div>
  );
}
