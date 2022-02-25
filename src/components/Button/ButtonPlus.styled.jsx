import styled from "styled-components";

export const ButtonPlusStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: var(--radius);
  border: 0;
  cursor: pointer;

  svg {
    path {
      fill: ${(props) => (props.maxExtras === 8 ? "var(--grey-1)" : "#D80000")};
    }
  }
`;
