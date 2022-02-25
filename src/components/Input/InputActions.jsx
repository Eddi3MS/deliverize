import React, { useState } from "react";
import { InputActionsStyled } from "./InputActions.styled";
import ButtonMinus from "../Button/ButtonMinus";
import ButtonPlus from "../Button/ButtonPlus";

const InputActions = (props) => {
  const [value, setValue] = useState(props.defaultValue);

  const handlePlus = (id, price) => {
    if (props.maxExtras === 8) {
      return;
    }

    const newValue = value + 1;
    setValue(newValue);
    props.updateValue(id, newValue, price);
  };

  const handleMinus = (id, price) => {
    if (value === props.defaultValue) {
      return;
    }

    const newValue = value - 1;
    setValue(newValue);
    props.updateValue(id, newValue, price);
  };

  return (
    <InputActionsStyled height={props.height}>
      <ButtonMinus
        defaultValue={props.defaultValue}
        currentValue={value}
        alt={props.altMinus}
        type="button"
        aria-label={props.altMinus}
        onClick={() => handleMinus(props.inputProps.id, props.price)}
      />

      <input {...props.inputProps} value={value} readOnly />

      <ButtonPlus
        maxExtras={props.maxExtras}
        alt={props.altPlus}
        type="button"
        aria-label={props.altPlus}
        onClick={() => handlePlus(props.inputProps.id, props.price)}
      />
    </InputActionsStyled>
  );
};

export default InputActions;
