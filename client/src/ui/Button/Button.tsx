import { FC } from "react";
import "./button.scss";

interface IButtonProps {
  title: string;
  className: string;
}

const Button: FC<IButtonProps> = ({ title, className }) => {
  return <button className={className}>{title}</button>;
};

export default Button;
