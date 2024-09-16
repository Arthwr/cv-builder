import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import SkillsData from "./SkillsData";
import data from "@data/mockData";

export default function ResumeSkills({ isEditMode }) {
  const [formData, setFormData] = useState(data.skills);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <ToggleFormButton />
      <SkillsData skillsData={formData} />
    </ResumeContainer>
  );
}
