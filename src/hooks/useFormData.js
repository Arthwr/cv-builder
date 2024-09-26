import { useState } from "react";

const updateFormData = (dataObject, fieldName, value) => {
  const keys = fieldName.split(".");
  const updatedDataObject = { ...dataObject };

  let currentLevel = updatedDataObject;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (Array.isArray(currentLevel[key])) {
      currentLevel[key] = [...currentLevel[key]];
    } else {
      currentLevel[key] = { ...currentLevel[key] };
    }

    currentLevel = currentLevel[key];
  }

  currentLevel[keys[keys.length - 1]] = value;

  return updatedDataObject;
};

export default function useFormData(initialFormState) {
  const [formData, setFormData] = useState(initialFormState);

  const handleFormChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = id || name;

    setFormData((prevForm) => {
      return updateFormData(prevForm, fieldName, value);
    });
  };

  const handleFormClear = () => {
    const clearedForm = Object.keys(formData).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});

    setFormData(clearedForm);
  };

  return { formData, handleFormChange, handleFormClear };
}
