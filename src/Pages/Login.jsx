import React from "react";
import { useAuth } from "../Context/AuthContext.jsx";
import { useFormContext } from "../Context/FormContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
  const { formData, updateForm, resetForm } = useFormContext();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
    resetForm();
    navigate("/");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateForm("email", e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => updateForm("password", e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login; // ✅ Make sure this is here
