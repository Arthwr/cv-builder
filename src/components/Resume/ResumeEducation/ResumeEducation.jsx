import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import EducationData from "./EducationData";
import data from "@data/mockData";

export default function ResumeEducation({ isEditMode }) {
  const [formData, setFormData] = useState(data.education);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <ToggleFormButton />
      <EducationData educationData={formData} />
    </ResumeContainer>
  );
}
