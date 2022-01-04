import { FC } from "react";
import "./input.scss";

interface IInputProps {
  placeholder: string;
  name: string;
  value: string;
  type: string;
  setFunction: Function;
}

const Input: FC<IInputProps> = ({
  placeholder,
  name,
  value,
  type,
  setFunction,
}) => {
  return (
    <input
      onChange={(e) => setFunction(e.target.value)}
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    ></input>
  );
};

export default Input;
