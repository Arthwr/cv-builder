import { useState } from "react";
import PersonalFormActions from "./PersonalFormActions";
import PersonalFormInput from "./PersonalFormInput";

const initialFormState = {
  firstName: "",
  lastName: "",
  location: "",
  email: "",
  phone: "",
  linkedin: "",
};

export default function PersonalForm({ onCancel, onSubmit }) {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleClear = () => {
    setForm(initialFormState);
  };

  return (
    <>
      <div className="form-container no print">
        <form id="personal-form" onSubmit={onSubmit}>
          <PersonalFormInput onChange={handleChange} formState={form} />
          <PersonalFormActions onCancel={onCancel} onClear={handleClear} />
        </form>
      </div>
    </>
  );
}
