import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import SectionButton from "@components/SharedComponents/SectionButton";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import SkillsData from "./SkillsData";
import data from "@data/mockData";

export default function ResumeSkills({ isEditMode }) {
  const [formData, setFormData] = useState(data.skills);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} />
      <SkillsData skillsData={formData} />
    </ResumeContainer>
  );
}
