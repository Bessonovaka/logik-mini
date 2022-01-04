import Input from "../../../ui/Input/Input";
import "../form.scss";
import Button from "../../../ui/Button/Button";
import { FC, useState } from "react";
import { registration } from "../../../store/action-creators/user";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import closeIcon from "../../../static/images/close.svg";

interface Props {
  isAuth: boolean;
  registrateFailed: boolean;
  setFormIsOpen: Function;
  title: string;
}

const RegistrationForm: FC<Props> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { from } = { from: { pathname: `${location.pathname}` } } || {
    from: { pathname: "/" },
  };
  const cb = () => {
    navigate(from, { replace: true });
  };
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch(registration(email, password));
    if (!props.registrateFailed) {
      cb();
    }
  };

  const formClose = () => {
    props.setFormIsOpen(false);
  };

  return !props.registrateFailed ? (
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
        Уже зарегистрированы?{" "}
        <Link to="/login" className="form__link">
          Войти
        </Link>
      </span>
      <Button
        title="Зарегистрироваться"
        className="button button_big"
        submit={formSubmit}
      />
    </form>
  ) : (
    <h1 style={{ textAlign: "center", color: "white" }}>
      Вы успешно зарегистрированы!
    </h1>
  );
};

export default RegistrationForm;
