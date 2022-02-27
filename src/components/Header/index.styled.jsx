import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-block: 0.75rem;
  width: 100%;
  background-color: var(--header);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  position: sticky;
  top: 0;

  .Header__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img.Header__logo-image {
    height: 2rem;
    justify-self: center;
  }

  .Header__menu-mobile {
    position: absolute;
    left: 1rem;
    transform: ${(props) => (props.isOpen ? "rotate(-90deg)" : "rotate(0)")};
    transition: transform 0.2s ease-in-out;
  }

  .Header__actions-wrapper {
    position: absolute;
    top: 56px;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    bottom: 0;
    width: min(300px, 90%);
    height: calc(100vh - 56px);
    background-color: var(--header);
    transition: all 0.2s ease-in-out;

    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .Header__actions-address {
      display: flex;
      align-items: center;
      height: 3rem;

      background-color: var(--white);
      padding: 0.5rem;
      font-size: var(--font-xs);
      line-height: 1.3;
      min-width: 230px;
      justify-content: space-between;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      border-radius: var(--radius);

      p:first-child {
        color: var(--red-1);
        padding-bottom: 0.3rem;
      }
      p:nth-of-type(2) {
        font-weight: 700;
      }
    }

    input {
      height: 3rem;
      min-width: 230px;
      max-width: 350px;
      padding-left: 1rem;
      border-radius: var(--radius);
      border: 1px solid var(--red-2);
      ::placeholder {
        color: var(--grey-4);
      }

      &:focus {
        outline: 0;
        border: 1px solid var(--primary-400);
      }
    }
    .Header__actions-buttons {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      font-size: var(--font-sm);
    }
  }

  @media (min-width: 1125px) {
    height: 80px;
    .Header__wrapper {
      justify-content: space-between;
    }

    img.Header__logo-image {
      height: 3rem;
    }

    .Header__menu-mobile {
      display: none;
    }

    .Header__actions-wrapper {
      //reset
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      width: auto;
      height: auto;

      background-color: var(--header);
      padding: 0;
      flex-direction: row;
      align-items: top;

      flex: 1;
      display: flex;
      justify-content: flex-end;
      gap: 1.5rem;

      input {
        flex: 1;
      }
    }
  }
`;
