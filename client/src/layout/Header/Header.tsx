import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";
import Button from "../../ui/Button/Button";
import "./header.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action-creators/user";

interface Props {
  isAuth: boolean;
}

const Header: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const logoutProfile = () => {
    dispatch(logout());
  };

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
          <Link to="/signup" className="header__link">
            Регистрация
          </Link>
        </li>
        <li className="header__item">
          {!props.isAuth ? (
            <Link to="/login" className="button button_white">
              Войти
            </Link>
          ) : (
            <Button
              title="Выйти"
              className="button button_white"
              submit={logoutProfile}
            >
              Выйти
            </Button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
