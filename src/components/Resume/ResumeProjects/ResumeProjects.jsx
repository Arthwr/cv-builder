import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm.js";
import data from "@data/mockData.js";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import ProjectsData from "@components/Resume/ResumeProjects/ProjectsData.jsx";
import ProjectsForm from "@components/Forms/ProjectsForm/ProjectsForm.jsx";

export default function ResumeProjects({ isEditMode }) {
  const [formData, setFormData] = useState(data.projects);
  const [isFormOpen, toggleForm] = useToggleForm();

  return (
    <>
      {isFormOpen ? (
        <ProjectsForm projectsData={formData} toggleForm={toggleForm} setFormData={setFormData} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <SectionButton
            iconUrl={toggleFormIcon}
            className={"toggle-icon"}
            label={"toggle form"}
            onClick={toggleForm}
          />
          <ProjectsData data={formData} />
        </ResumeContainer>
      )}
    </>
  );
}
