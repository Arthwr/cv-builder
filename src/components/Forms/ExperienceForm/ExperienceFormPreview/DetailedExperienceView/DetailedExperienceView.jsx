import useToggleForm from "@hooks/useToggleForm.js";
import useFormData from "@hooks/useFormData.js";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import ExperienceEditForm from "@components/Forms/ExperienceForm/ExperienceFormPreview/DetailedExperienceView/ExperienceEditForm.jsx";
import FormActions from "@components/SharedComponents/FormActions.jsx";
import bulletToggleFormIcon from "@assets/icons/bulletToggleFormIcon.svg";

export default function DetailedExperienceView({ data, onSubmit }) {
  const { formData, setFormData, handleFormChange, handleFormClear, handleFormReset } = useFormData(data);
  const [isFormOpen, toggleForm] = useToggleForm();

  const handleBulletRemove = (id) => {
    setFormData((prevFormData) => {
      const updatedBullets = prevFormData.bullets.filter((bullet) => bullet.id !== id);
      return {
        ...prevFormData,
        bullets: updatedBullets,
      };
    });
  };

  const handleCancel = () => {
    handleFormReset();
    toggleForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    toggleForm();
  };

  return (
    <>
      <td className={`bullets-preview ${isFormOpen ? `bullet-form-bg` : ``}`} colSpan={4}>
        {isFormOpen ? (
          <form id="bullet-form" onSubmit={handleSubmit}>
            <ExperienceEditForm formData={formData} onChange={handleFormChange} onRemove={handleBulletRemove} />
            <FormActions onClear={handleFormClear} onCancel={handleCancel} />
          </form>
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
            onClick={toggleForm}
          />
        )}
      </td>
    </>
  );
}
