import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm";
import data from "@data/mockData.js";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import CourseWorkForm from "@components/Forms/CourseworkForm/CourseWorkForm.jsx";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import CourseworkData from "@components/Resume/ResumeCoursework/CourseworkData.jsx";

export default function ResumeCoursework({ isEditMode }) {
  const [formData, setFormData] = useState(data.coursework);
  const [isFormOpen, toggleForm] = useToggleForm();

  return (
    <>
      {isFormOpen ? (
        <CourseWorkForm courseworkData={formData} toggleForm={toggleForm} setFormData={setFormData} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <SectionButton
            iconUrl={toggleFormIcon}
            className={"toggle-icon"}
            label={"toggle form"}
            onClick={toggleForm}
          />
          <CourseworkData courseworkData={formData} />
        </ResumeContainer>
      )}
    </>
  );
}
