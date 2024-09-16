import { useState } from "react";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import CourseworkData from "./CourseworkData";
import data from "@data/mockData";

export default function ResumeCoursework({ isEditMode }) {
  const [formData, setFormData] = useState(data.coursework);

  return (
    <ResumeContainer isEditMode={isEditMode}>
      <ToggleFormButton />
      <CourseworkData coureworkData={formData} />
    </ResumeContainer>
  );
}
