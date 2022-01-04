import { FC, useState } from "react";
import "./auth-page.scss";
import RegistrationForm from "../../components/auth/registration/RegistrationForm";
import LoginForm from "../../components/auth/login/LoginForm";
import { Navigate } from "react-router-dom";

interface Props {
  isAuth: boolean;
  registrateFailed: boolean;
  title: string;
}

const AuthPage: FC<Props> = (props) => {
  const [loginFormIsOpen, setLoginFormIsOpen] = useState<boolean>(true);
  const [registrationFormIsOpen, setRegistrationFormIsOpen] =
    useState<boolean>(true);

  console.log(loginFormIsOpen);
  console.log(props.title);
  console.log(props.isAuth);

  if (props.title === "Регистрация" && registrationFormIsOpen) {
    return (
      <div className="auth-page">
        <RegistrationForm
          registrateFailed={props.registrateFailed}
          isAuth={props.isAuth}
          setFormIsOpen={setRegistrationFormIsOpen}
          title={props.title}
        />
      </div>
    );
  } else if (props.title === "Авторизация" && loginFormIsOpen) {
    return (
      <div className="auth-page">
        <LoginForm
          isAuth={props.isAuth}
          setFormIsOpen={setLoginFormIsOpen}
          title={props.title}
        />
      </div>
    );
  } else {
    return <Navigate to={{ pathname: "/" }} />;
  }
};

export default AuthPage;
