import { useState } from "react";
import generateRandomId from "@utils/generateRandomId.js";
import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import ExperienceFormActions from "@components/Forms/ExperienceForm/ExperienceFormActions.jsx";
import ExperienceFormPreview from "@components/Forms/ExperienceForm/ExperienceFormPreview/ExperienceFormPreview.jsx";

export default function ExperienceForm({ formInfo, toggleFormHandler, setData }) {
  const [initialFormInfo] = useState(formInfo);
  const [currentFormInfo, setCurrentFormInfo] = useState(formInfo);

  const revertFormChanges = () => {
    setCurrentFormInfo(initialFormInfo);
    toggleFormHandler();
  };

  const addExperienceItem = () => {
    setCurrentFormInfo((prevExperience) => {
      return [
        ...prevExperience,
        {
          id: generateRandomId(),
          summary: {
            position: "Lorem",
            company: "Ipsum Dolor",
            location: "Sit amet, consectetur",
            period: "2024 - Present",
          },
          bullets: [{ id: generateRandomId(), info: "Nam sit amet magna a" }],
        },
      ];
    });
  };

  const removeExperienceItem = (id) => {
    setCurrentFormInfo((prevExperience) => prevExperience.filter((experience) => experience.id !== id));
  };

  const confirmExperienceChange = (updatedExperience) => {
    setCurrentFormInfo((prevExperience) =>
      prevExperience.map((item) => (item.id === updatedExperience.id ? updatedExperience : item))
    );
  };

  const confirmFormChanges = () => {
    setData(currentFormInfo);
    toggleFormHandler();
  };

  return (
    <div className="separator">
      <FormContainer>
        <div className="form-group">
          <ExperienceFormPreview
            formInfo={currentFormInfo}
            onRemove={removeExperienceItem}
            onSubmit={confirmExperienceChange}
          />
          <ExperienceFormActions
            onCancel={revertFormChanges}
            onSave={confirmFormChanges}
            onAddition={addExperienceItem}
          />
        </div>
      </FormContainer>
    </div>
  );
}
