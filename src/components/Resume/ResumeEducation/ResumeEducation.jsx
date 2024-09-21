import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import EducationData from "@components/Resume/ResumeEducation/EducationData.jsx";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import data from "@data/mockData.js";

export default function ResumeEducation({ isEditMode }) {
  const [formData, setFormData] = useState(data.education);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} />
      <EducationData educationData={formData} />
    </ResumeContainer>
  );
}
