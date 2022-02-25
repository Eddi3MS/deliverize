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

    font-size: var(--font-sm);
  }
  p {
    padding-left: 10px;
  }

  ul {
    display: block;
    list-style-type: disc;
    padding-left: 15px;
    list-style-position: inside;

    li {
      margin: 0;
      padding: 0;
    }

    span + span {
      padding-left: 5px;
    }
  }
`;
