import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm.js";
import PersonalForm from "@components/Forms/PersonalForm/PersonalForm.jsx";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import PersonalData from "@components/Resume/ResumePersonal/PersonalData.jsx";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg"
import data from "@data/mockData.js";

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
          <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} onClick={toggleForm} />
          <PersonalData userData={formInfo} />
        </ResumeContainer>
      )}
    </>
  );
}
