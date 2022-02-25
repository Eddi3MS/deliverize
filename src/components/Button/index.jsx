import React from "react";
import { ButtonStyled } from "./index.styled";

const Button = ({ img, text, width, alt, cart, ...rest }) => {
  return (
    <ButtonStyled {...rest}>
      {cart > 0 && (
        <div className="badged">
          <span>{cart}</span>
        </div>
      )}
      {img && <img src={img} width={width} alt={alt} />}
      {text && <span>{text}</span>}
    </ButtonStyled>
  );
};

export default Button;
