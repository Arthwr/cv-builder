import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm";
import PersonalForm from "@components/Forms/PersonalForm/PersonalForm";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import PersonalData from "./PersonalData";
import data from "@data/mockData";

export default function ResumePersonal({ isEditMode }) {
  const [formInfo, setFormInfo] = useState(data.personal);
  const [isFormOpen, toggleForm] = useToggleForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    setFormInfo(formObject);
    toggleForm();
  };

  return (
    <>
      {isFormOpen ? (
        <PersonalForm onCancel={toggleForm} onSubmit={handleSubmit} formInfo={formInfo} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <ToggleFormButton onClick={toggleForm} />
          <PersonalData userData={formInfo} />
        </ResumeContainer>
      )}
    </>
  );
}
