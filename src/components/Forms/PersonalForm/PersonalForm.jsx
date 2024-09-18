import { useState } from "react";
import PersonalFormActions from "./PersonalFormActions";
import PersonalFormInput from "./PersonalFormInput";
import FormContainer from "@components/SharedComponents/FormContainer";

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
