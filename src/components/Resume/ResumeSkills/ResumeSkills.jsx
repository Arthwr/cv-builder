import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import SkillsData from "@components/Resume/ResumeSkills/SkillsData.jsx";
import data from "@data/mockData.js";

export default function ResumeSkills({ isEditMode }) {
  const [formData, setFormData] = useState(data.skills);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} />
      <SkillsData skillsData={formData} />
    </ResumeContainer>
  );
}
