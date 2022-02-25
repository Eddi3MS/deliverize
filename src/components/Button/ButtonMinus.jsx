import React from "react";
import { ButtonMinusStyled } from "./ButtonMinus.styled";

const ButtonMinus = ({ alt, ...rest }) => {
  return (
    <ButtonMinusStyled {...rest}>
      <svg
        width="14"
        height="3"
        viewBox="0 0 14 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.959167H14V2.95917H0V0.959167Z" fill="currentColor" />
      </svg>
    </ButtonMinusStyled>
  );
};

export default ButtonMinus;
