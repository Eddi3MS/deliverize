import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  font-size: 0.875rem;

  &:not(:last-of-type) {
    border-top: 1px solid var(--primary-250);
  }

  label {
    font-weight: 500;
  }

  p {
    color: var(--primary-400);
  }

  @media (min-width: 1125px) {
  }
`;
