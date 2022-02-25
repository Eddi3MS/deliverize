import styled from "styled-components";

import "@fontsource/roboto-condensed";
import "@fontsource/roboto-condensed/700.css";

export const ModalStyled = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  min-height: 146px;
  width: 208px;
  font-size: var(--font-xs);
  position: fixed;
  right: 10%;
  background-color: var(--white);
  padding-bottom: 0.5rem;
  border-radius: var(--radius);
  line-height: 110%;

  ::before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: var(--primary-400);
    position: absolute;
    left: 50%;
    transform: translate(0, -50%) rotate(45deg);
  }

  div {
    height: 32px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color: var(--primary-400);

    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);

    h2 {
      color: var(--white);
      font-size: var(--font-bg);
    }
  }

  h3 {
    padding: 0.5rem 10px;
    color: var(--red-3);

    font-size: var(--font-sm);
  }
  p {
    padding-left: 10px;
  }

  ul {
    display: block;
    padding-left: 15px;

    li {
      line-height: 1.2;

      &:before {
        content: "·";
        font-size: 35px;
        vertical-align: middle;
        line-height: 17px;
      }
    }
    span {
      padding-left: 2px;
    }

    span + span {
      padding-left: 4px;
    }
  }
`;
