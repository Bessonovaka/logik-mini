import Input from "../../../ui/Input/Input";
import "../form.scss";
import { Link } from "react-router-dom";
import Button from "../../../ui/Button/Button";

const LoginForm = () => {
  return (
    <form className="form">
      <h1>Регистрация</h1>
      <Input placeholder="Email" name="Email" value="" type="email" />
      <Input placeholder="Пароль" name="password" value="" type="password" />
      <span className="form__text">
        Уже зарегистрированы?{" "}
        <Link to="/login" className="form__link">
          Войти
        </Link>
      </span>
      <Button title="Зарегистрироваться" className="button button_big" />
    </form>
  );
};

export default LoginForm;
