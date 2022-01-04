import Input from "../../../ui/Input/Input";
import "../form.scss";
import { Link, Navigate } from "react-router-dom";
import Button from "../../../ui/Button/Button";
import { FC, useState } from "react";
import { login } from "../../../store/action-creators/user";
import { useDispatch } from "react-redux";
import closeIcon from "../../../static/images/close.svg";

interface Props {
  isAuth: boolean;
  setFormIsOpen: Function;
  title: string;
}

const LoginForm: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch(login(email, password));
  };

  const formClose = () => {
    props.setFormIsOpen(false);
  };

  if (props.isAuth) {
    return <Navigate to={{ pathname: "/" }} />;
  } else {
    return (
      <form className="form">
        <div className="form__title">
          <h1 className="form__subtitle">{props.title}</h1>
          <img
            onClick={formClose}
            className="close-icon"
            src={closeIcon}
            alt="Закрыть"
          />
        </div>
        <Input
          placeholder="Email"
          name="Email"
          value={email}
          type="email"
          setFunction={setEmail}
        />
        <Input
          placeholder="Пароль"
          name="password"
          value={password}
          type="password"
          setFunction={setPassword}
        />
        <span className="form__text">
          Ещё не зарегистрированы?{" "}
          <Link to="/signup" className="form__link">
            Регистрация
          </Link>
        </span>
        <Button
          title="Войти"
          className="button button_big"
          submit={formSubmit}
        />
      </form>
    );
  }
};

export default LoginForm;
