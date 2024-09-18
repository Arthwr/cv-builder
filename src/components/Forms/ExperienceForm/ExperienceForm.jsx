import FormContainer from "@components/SharedComponents/FormContainer";
import ExperienceFormActions from "./ExperienceFormActions";
import ExperienceFormPreview from "./ExperienceFormPreview";

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
