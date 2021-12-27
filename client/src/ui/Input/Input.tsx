import { FC } from "react";
import "./input.scss";

interface IInputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
}

const Input: FC<IInputProps> = ({ placeholder, name, value, type }) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    ></input>
  );
};

export default Input;
