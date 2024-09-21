import FormContainer from "@components/SharedComponents/FormContainer.jsx";
import ExperienceFormActions from "@components/Forms/ExperienceForm/ExperienceFormActions.jsx";
import ExperienceFormPreview from "@components/Forms/ExperienceForm/ExperienceFormPreview.jsx";

export default function ExperienceForm({ formInfo, onCancel }) {
  return (
    <FormContainer>
      <form id="experience-form">
        <ExperienceFormPreview formInfo={formInfo} />
        <ExperienceFormActions onCancel={onCancel} />
      </form>
    </FormContainer>
  );
}
