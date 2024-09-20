import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import SectionButton from "@components/SharedComponents/SectionButton";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import CourseworkData from "./CourseworkData";
import data from "@data/mockData";

export default function ResumeCoursework({ isEditMode }) {
  const [formData, setFormData] = useState(data.coursework);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} />
      <CourseworkData coureworkData={formData} />
    </ResumeContainer>
  );
}
