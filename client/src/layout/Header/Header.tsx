import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.scss";
import Button from "../../ui/Button/Button";

const Header: FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__link header-logo">
        <img src={logo} alt="logo" className="header-logo__img" />
        <span className="header-logo__text">Mini-Mimi</span>
      </Link>
      <ul className="header__nav">
        <li className="header__item">
          <Link to="/" className="header__link">
            Задачи
          </Link>
        </li>
        <li className="header__item">
          <Link to="/" className="header__link">
            О проекте
          </Link>
        </li>
        <li className="header__item">
          <Link to="/" className="header__link">
            Регистрация
          </Link>
        </li>
        <li className="header__item">
          <Button title="Войти" className="button button_white" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
