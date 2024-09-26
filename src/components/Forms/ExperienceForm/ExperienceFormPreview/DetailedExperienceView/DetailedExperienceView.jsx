import useToggleForm from "@hooks/useToggleForm.js";
import useFormData from "@hooks/useFormData.js";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import ExperienceEditForm from "@components/Forms/ExperienceForm/ExperienceFormPreview/DetailedExperienceView/ExperienceEditForm.jsx";
import FormActions from "@components/SharedComponents/FormActions.jsx";
import bulletToggleFormIcon from "@assets/icons/bulletToggleFormIcon.svg";

export default function DetailedExperienceView({ data }) {
  const [isFormOpen, toggleFormOpen] = useToggleForm();
  const { formData, handleFormChange, handleFormClear } = useFormData(data);

  return (
    <>
      <td className={`bullets-preview ${isFormOpen ? `bullet-form-bg` : ``}`} colSpan={4}>
        {isFormOpen ? (
          <>
            <ExperienceEditForm formData={formData} onChange={handleFormChange} />
            <FormActions onClear={handleFormClear} />
          </>
        ) : (
          <div className="bullets-container">
            <ul>
              {data.bullets.map((item) => (
                <li key={item.id}>{item.info}</li>
              ))}
            </ul>
          </div>
        )}
      </td>
      <td>
        {isFormOpen ? null : (
          <SectionButton
            className={"action-icon"}
            iconUrl={bulletToggleFormIcon}
            label={"toggle bullet form"}
            onClick={toggleFormOpen}
          />
        )}
      </td>
    </>
  );
}
