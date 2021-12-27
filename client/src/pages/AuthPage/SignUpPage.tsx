import { FC } from "react";
import "./auth-page.scss";
import SignUpForm from "../../components/auth/signup/SignUpForm";

const LoginPage: FC = () => {
  return (
    <div className="login-page">
      <SignUpForm />
    </div>
  );
};

export default LoginPage;
