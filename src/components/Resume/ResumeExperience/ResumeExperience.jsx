import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm.js";
import ResumeContainer from "@components/SharedComponents/ResumeContainer.jsx";
import ExperienceForm from "@components/Forms/ExperienceForm/ExperienceForm.jsx";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import ExperienceData from "@components/Resume/ResumeExperience/ExperienceData.jsx";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg";
import data from "@data/mockData.js";

export default function ResumeExperience({ isEditMode }) {
  const [isFormOpen, toggleForm] = useToggleForm();
  const [experienceData, setExperienceData] = useState(data.experience);

  return (
    <>
      {isFormOpen ? (
        <ExperienceForm formInfo={experienceData} toggleFormHandler={toggleForm} setData={setExperienceData} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <SectionButton
            iconUrl={toggleFormIcon}
            className={"toggle-icon"}
            label={"toggle form"}
            onClick={toggleForm}
          />
          <ExperienceData experienceData={experienceData} />
        </ResumeContainer>
      )}
    </>
  );
}
