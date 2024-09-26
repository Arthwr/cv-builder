import { useState } from "react";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import ExperienceFormActions from "@components/Forms/ExperienceForm/ExperienceFormActions/ExperienceFormActions.jsx";
import ExperienceFormPreview from "@components/Forms/ExperienceForm/ExperienceFormPreview/ExperienceFormPreview.jsx";

export default function ExperienceForm({ formInfo, toggleFormHandler, setData }) {
  const [initialFormInfo] = useState(formInfo);
  const [currentFormInfo, setCurrentFormInfo] = useState(formInfo);

  const revertFormChanges = () => {
    setCurrentFormInfo(initialFormInfo);
    toggleFormHandler();
  };

  const removeExperienceItem = (id) => {
    setCurrentFormInfo((prevExperience) => prevExperience.filter((experience) => experience.id !== id));
  };

  const confirmFormChanges = () => {
    setData(currentFormInfo);
    toggleFormHandler();
  };

  return (
    <div className="separator">
      <FormContainer>
        <div className="form-group">
          <ExperienceFormPreview formInfo={currentFormInfo} onRemove={removeExperienceItem} />
          <ExperienceFormActions onCancel={revertFormChanges} onSave={confirmFormChanges} />
        </div>
      </FormContainer>
    </div>
  );
}
