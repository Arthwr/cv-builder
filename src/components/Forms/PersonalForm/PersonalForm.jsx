import { useState } from "react";
import PersonalFormActions from "./PersonalFormActions.jsx";
import PersonalFormInput from "./PersonalFormInput.jsx";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";

export default function PersonalForm({ onCancel, onSubmit, formInfo }) {
  const [form, setForm] = useState(formInfo);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleClear = () => {
    setForm({
      firstName: "",
      lastName: "",
      location: "",
      email: "",
      phone: "",
      linkedin: "",
    });
  };

  return (
    <FormContainer>
      <form id="personal-form" onSubmit={onSubmit}>
        <PersonalFormInput onChange={handleChange} formState={form} />
        <PersonalFormActions onCancel={onCancel} onClear={handleClear} />
      </form>
    </FormContainer>
  );
}
