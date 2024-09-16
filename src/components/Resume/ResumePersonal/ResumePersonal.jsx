import { useState } from "react";
import useToggleForm from "@hooks/useToggleForm";
import PersonalForm from "@components/Forms/PersonalForm/PersonalForm";
import PersonalFormActions from "@components/Forms/PersonalForm/PersonalFormActions";
import ToggleFormButton from "@components/SharedComponents/ToggleFormButton";
import ResumeContainer from "@components/SharedComponents/ResumeContainer";
import PersonalData from "./PersonalData";
import data from "@data/mockData";

export default function ResumePersonal({ isEditMode }) {
  const [formData, setFormData] = useState(data.personal);
  const [isFormOpen, toggleFormOpen] = useToggleForm();

  return (
    <>
      {isFormOpen ? (
        <div className="form-container no print">
          <PersonalForm />
          <PersonalFormActions onCancel={toggleFormOpen} />
        </div>
      ) : (
        <ResumeContainer isEditMode={isEditMode}>
          <ToggleFormButton onClick={toggleFormOpen} />
          <PersonalData userData={formData} />
        </ResumeContainer>
      )}
    </>
  );
}
