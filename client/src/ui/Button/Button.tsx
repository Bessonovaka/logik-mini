import { FC, MouseEventHandler } from "react";
import "./button.scss";

interface IButtonProps {
  title: string;
  className: string;
  submit: MouseEventHandler;
}

const Button: FC<IButtonProps> = ({ title, className, submit }) => {
  return (
    <button onClick={submit} className={className}>
      {title}
    </button>
  );
};

export default Button;
