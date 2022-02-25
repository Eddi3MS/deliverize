import React from "react";
import { InputStyled } from "./index.styled";

import InputActions from "./InputActions";

const Input = (props) => {
  let priceToShow = props.price.toFixed(2).replace(".", ",");

  if (props.priceToShow > 0) {
    priceToShow = props.priceToShow.toFixed(2).replace(".", ",");
  }

  return (
    <InputStyled>
      <label htmlFor={props.input.id}>{props.label} :</label>
      <InputActions
        updateValue={props.updateExtras}
        defaultValue={props.defaultValue}
        inputProps={props.input}
        maxExtras={props.maxExtras}
        price={props.price}
        altPlus={`Adicionar ${props.label}`}
        altMinus={`Remover ${props.label}`}
      />
      <p>+ R${priceToShow}</p>
    </InputStyled>
  );
};

export default Input;
