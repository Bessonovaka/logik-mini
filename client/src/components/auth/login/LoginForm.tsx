import Input from "../../../ui/Input/Input";
import "../form.scss";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button/Button";

const LoginForm = () => {
  return (
    <form className="form">
      <h1>Авторизация</h1>
      <Input placeholder="Email" name="Email" value="" type="email" />
      <Input placeholder="Пароль" name="password" value="" type="password" />
      <span className="form__text">
        Ещё не зарегистрированы?{" "}
        <Link to="/signup" className="form__link">
          Регистрация
        </Link>
      </span>
      <Button title="Войти" className="button button_big" />
    </form>
  );
};

export default LoginForm;
