import React from "react";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <div className="auth-form">
      <h2>Register</h2>
      <AuthForm mode="register" />
    </div>
  );
};

export default Register;
