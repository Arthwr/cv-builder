import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import SectionButton from "@components/SharedComponents/SectionButton";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import EducationData from "./EducationData";
import data from "@data/mockData";

export default function ResumeEducation({ isEditMode }) {
  const [formData, setFormData] = useState(data.education);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} />
      <EducationData educationData={formData} />
    </ResumeContainer>
  );
}
