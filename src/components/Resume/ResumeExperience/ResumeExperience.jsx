import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import ExperienceForm from "@components/Forms/ExperienceForm/ExperienceForm";
import SectionButton from "@components/SharedComponents/SectionButton";
import toggleFormIcon from "@assets/icons/toggleFormIcon.svg"
import ExperienceData from "./ExperienceData";
import data from "@data/mockData";

export default function ResumeExperience({ isEditMode }) {
  const [formInfo, setFormInfo] = useState(data.experience);
  const [isFormOpen, toggleForm] = useToggleForm();

  return (
    <>
      {isFormOpen ? (
        <ExperienceForm formInfo={formInfo} onCancel={toggleForm} />
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <SectionButton iconUrl={toggleFormIcon} className={"toggle-icon"} label={"toggle form"} onClick={toggleForm} />
          <ExperienceData experienceData={formInfo} />
        </ResumeContainer>
      )}
    </>
  );
}
