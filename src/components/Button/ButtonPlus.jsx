import React from "react";
import { ButtonPlusStyled } from "./ButtonPlus.styled";

const ButtonPlus = ({ alt, ...rest }) => {
  return (
    <ButtonPlusStyled {...rest}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.875 7.08417V0.959167H6.125V7.08417H0V8.83417H6.125V14.9592H7.875V8.83417H14V7.08417H7.875Z"
          fill="#D80000"
        />
      </svg>
    </ButtonPlusStyled>
  );
};

export default ButtonPlus;
