import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <AuthForm mode="login" />
    </div>
  );
};

export default Login;
