import styled from "styled-components";

export const InputActionsStyled = styled.div`
  margin-left: auto;
  border: 1px solid var(--primary-400);
  border-radius: var(--radius);
  height: ${(props) => props.height || "2rem"};
  max-width: 140px;

  display: flex;
  justify-content: space-around;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 25px;
    margin-inline: 0.5rem;
    border: 0;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
