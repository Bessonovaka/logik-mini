import { FC } from "react";
import "./auth-page.scss";
import LoginForm from "../../components/auth/login/LoginForm";

const LoginPage: FC = () => {
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
