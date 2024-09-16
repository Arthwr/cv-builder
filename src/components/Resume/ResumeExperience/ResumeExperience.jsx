import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import ExperienceData from "./ExperienceData";
import data from "@data/mockData";

export default function ResumeExperience({ isEditMode }) {
  const [formData, setFormData] = useState(data.experience);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <ToggleFormButton />
      <ExperienceData experienceData={formData} />
    </ResumeContainer>
  );
}
