import { useState } from "react";

const updateFormData = (dataSource, fieldName, value) => {
  const keys = fieldName.split(".");
  let updatedData = Array.isArray(dataSource) ? [...dataSource] : { ...dataSource };
  let currentLevel = updatedData;

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
  return updatedData;
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
  const [initialState, setInitialState] = useState(initialFormState);

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

  const updateInitialState = () => {
    setInitialState(formData);
  };

  return { formData, setFormData, updateInitialState, handleFormChange, handleFormClear, handleFormReset };
}
