import { useState } from "react";

export default function useToggleForm(initialState = false) {
  const [isFormOpen, setFormOpen] = useState(initialState);

  const toggleForm = () => {
    setFormOpen((prev) => !prev);
  };

  return [isFormOpen, toggleForm];
}
