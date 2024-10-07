import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm.js";
import data from "@data/mockData.js";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import SkillsData from "@components/Resume/ResumeSkills/SkillsData.jsx";
import SkillsForm from "@components/Forms/SkillsForm/SkillsForm.jsx";

export default function ResumeSkills({ isEditMode }) {
  const [formData, setFormData] = useState(data.skills);
  const [isFormOpen, toggleForm] = useToggleForm();

  return (
    <>
      {isFormOpen ? (
        <SkillsForm skillsData={formData} setFormData={setFormData} toggleForm={toggleForm} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <SectionButton
            iconUrl={toggleFormIcon}
            className={"toggle-icon"}
            label={"toggle form"}
            onClick={toggleForm}
          />
          <SkillsData skillsData={formData} />
        </ResumeContainer>
      )}
    </>
  );
}
