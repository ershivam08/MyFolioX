import React, { createContext, useState, useContext } from "react";

// Create Context
const FormContext = createContext();

// Provider Component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Update specific field in form data
  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Reset form data
  const resetForm = () => {
    setFormData({ email: "", password: "" });
  };

  return (
    <FormContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for consuming context
export const useFormContext = () => {
  return useContext(FormContext);
};
