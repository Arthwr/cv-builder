import bulletToggleFormIcon from "@assets/icons/bulletToggleFormIcon.svg";
import useToggleForm from "@hooks/useToggleForm.js";
import useFormData from "@hooks/useFormData.js";
import generateRandomId from "@utils/generateRandomId.js";
import SectionButton from "@components/SharedComponents/SectionButton.jsx";
import DetailedExperienceEditForm from "@components/Forms/ExperienceForm/ExperienceFormPreview/DetailedExperienceEditForm.jsx";
import FormActionsWithAddBtn from "@components/SharedComponents/FormActionsWithAddBtn.jsx";

export default function DetailedExperienceView({ data, onSubmit }) {
  const { formData, setFormData, updateInitialState, handleFormChange, handleFormClear, handleFormReset } =
    useFormData(data);
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

  const handleBulletAddition = () => {
    setFormData((prevFormData) => {
      const updatedBullets = [
        ...prevFormData.bullets,
        { id: generateRandomId(), info: "Donec a felis non nisi porta gravida in a est. Cras eget consectetur nisi." },
      ];
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
    updateInitialState();
    toggleForm();
  };

  return (
    <>
      <td className={`bullets-preview ${isFormOpen ? `bullet-form-bg` : ``}`} colSpan={4}>
        {isFormOpen ? (
          <form id="bullet-form" onSubmit={handleSubmit}>
            <DetailedExperienceEditForm formData={formData} onChange={handleFormChange} onRemove={handleBulletRemove} />
            <FormActionsWithAddBtn onAddition={handleBulletAddition} onClear={handleFormClear} onCancel={handleCancel} />
          </form>
        ) : (
          <div className="bullets-container">
            <ul>
              {formData.bullets.map((item) => (
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
