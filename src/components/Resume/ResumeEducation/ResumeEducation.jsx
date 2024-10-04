import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import EducationData from "@components/Resume/ResumeEducation/EducationData.jsx";
import EducationForm from "@components/Forms/EducationForm/EducationForm.jsx";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import data from "@data/mockData.js";

export default function ResumeEducation({ isEditMode }) {
  const [formData, setFormData] = useState(data.education);
  const [isFormOpen, toggleForm] = useToggleForm();

  return (
    <>
      {isFormOpen ? (
        <EducationForm data={formData} toggleForm={toggleForm} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <SectionButton
            iconUrl={toggleFormIcon}
            className={"toggle-icon"}
            label={"toggle form"}
            onClick={toggleForm}
          />
          <EducationData educationData={formData} />
        </ResumeContainer>
      )}
    </>
  );
}
