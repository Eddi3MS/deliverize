import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg || "transparent"};
  height: ${(props) => props.height || "auto"};
  border-radius: var(--radius);
  border: 0;
  cursor: pointer;

  span {
    padding-left: 0.5rem;
    font-size: var(--font-md);
    font-weight: ${(props) => props.bold || "400"};

    color: ${(props) => props.color || "var(--red-2)"};
    letter-spacing: 0.2px;
  }
`;
