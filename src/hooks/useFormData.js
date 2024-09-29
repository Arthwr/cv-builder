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

const clearFormData = (data) => {
  if (Array.isArray(data)) {
    return data.map(clearFormData);
  }

  if (typeof data === "object" && data !== null) {
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = key === "id" ? data[key] : clearFormData(data[key]);
      return acc;
    }, {});
  }

  return typeof data === "string" ? "" : data;
};

export default function useFormData(initialFormState) {
  const [formData, setFormData] = useState(initialFormState);
  const [initialState] = useState(initialFormState);

  const handleFormChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = id || name;
    setFormData((prevForm) => updateFormData(prevForm, fieldName, value));
  };

  const handleFormClear = () => {
    setFormData((prevForm) => clearFormData(prevForm));
  };

  const handleFormReset = () => {
    setFormData(initialState);
  };

  return { formData, handleFormChange, handleFormClear, handleFormReset };
}
