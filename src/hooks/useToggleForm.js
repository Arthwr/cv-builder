import { useState } from "react";

export default function useToggleForm(initialState = false) {
  const [isFormOpen, setFormOpen] = useState(initialState);

  const toggleFormOpen = () => {
    setFormOpen((prev) => !prev);
  };

  return [isFormOpen, toggleFormOpen];
}
