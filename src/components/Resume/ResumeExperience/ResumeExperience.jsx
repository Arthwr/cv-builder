import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import ExperienceData from "./ExperienceData";
import ExperienceForm from "@components/Forms/ExperienceForm/ExperienceForm";
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
          <ToggleFormButton onClick={toggleForm} />
          <ExperienceData experienceData={formInfo} />
        </ResumeContainer>
      )}
    </>
  );
}
