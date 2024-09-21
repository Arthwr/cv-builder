import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import CourseworkData from "@components/Resume/ResumeCoursework/CourseworkData.jsx";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import data from "@data/mockData.js";

export default function ResumeCoursework({ isEditMode }) {
  const [formData, setFormData] = useState(data.coursework);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} />
      <CourseworkData coureworkData={formData} />
    </ResumeContainer>
  );
}
