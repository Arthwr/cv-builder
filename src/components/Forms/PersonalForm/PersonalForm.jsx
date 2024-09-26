import FormActions from "../../SharedComponents/FormActions.jsx";
import PersonalFormInput from "./PersonalFormInput.jsx";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import useFormData from "@hooks/useFormData.js";

export default function PersonalForm({ onCancel, onSubmit, formInfo }) {
  const { formData, handleFormChange, handleFormClear } = useFormData(formInfo);

  return (
    <div className="separator">
      <FormContainer>
        <form id="personal-form" className="form-group" onSubmit={onSubmit}>
          <PersonalFormInput onChange={handleFormChange} formState={formData} />
          <FormActions onCancel={onCancel} onClear={handleFormClear} />
        </form>
      </FormContainer>
    </div>
  );
}
