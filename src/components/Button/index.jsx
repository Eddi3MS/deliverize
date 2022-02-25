import React from "react";
import { ButtonStyled } from "./index.styled";

const Button = ({ img, text, width, alt, ...rest }) => {
  return (
    <ButtonStyled {...rest}>
      {img && <img src={img} width={width} alt={alt} />}
      {text && <span>{text}</span>}
    </ButtonStyled>
  );
};

export default Button;
