import React from "react";
interface Props {
  onClick: () => void;
}
const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Agregar +</button>;
};

export default Button;
