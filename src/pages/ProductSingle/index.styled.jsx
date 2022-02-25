import styled from "styled-components";

export const ProductSingleStyled = styled.main`
  padding-block: 2rem;
  display: flex;

  .Hero__wrapper {
    .Hero__wrapper-info {
      text-align: left;
      max-width: 600px;
      img {
        margin-inline: auto;
        width: 58%;
      }

      h1 {
        margin-top: 1.5rem;
        font-size: var(--font-bg);
        font-weight: 500;
      }

      p {
        margin-block: 1rem;
        font-size: var(--font-md);
      }

      div {
        margin-bottom: 2rem;
      }

      span {
        font-size: var(--font-sm);
      }

      span:first-of-type {
        color: var(--primary-300);
      }

      span + span {
        margin-left: 1rem;
      }
    }

    .Hero__wrapper-form {
      flex: 1;

      .Hero__wrapper-form-ingredients {
        background-color: var(--primary-100);
        padding: 0.5rem var(--font-sm);
        margin-bottom: 1rem;

        p {
          font-size: var(--font-xs);
        }
        p:nth-of-type(1) {
          font-size: var(--font-sm);
          font-weight: 500;
        }
        p:nth-of-type(2) {
          color: var(--primary-300);
        }
      }

      .Hero__wrapper-form-radio {
        .form-radio-question {
          width: 100%;
          background-color: var(--primary-100);
          padding: 8px 0 24px 14px;

          p {
            font-size: var(--font-sm);
            font-weight: 500;
          }
        }

        .form-radio-answer {
          display: flex;
          justify-content: space-between;
          padding-block: 0.5rem;

          span {
            font-size: var(--font-sm);
          }

          input {
            display: none;
          }

          label {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid var(--primary-200);
            cursor: pointer;
          }

          input:checked ~ label {
            background-color: var(--primary-200);
          }
        }
      }

      .Hero__wrapper-form-total {
        display: flex;
        gap: 0.5rem;

        & > div {
          min-width: 40%;
        }

        & > button {
          flex: 1;
        }
      }
    }
  }

  @media (min-width: 1125px) {
    height: calc(100vh - 80px);
    .Hero__wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Hero__wrapper-info {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 597px;
        img {
          width: auto;

          height: 388px;
        }

        h1 {
          font-size: var(--font-xg);
        }

        p {
          font-size: var(--font-gg);
        }

        span {
          font-size: var(--font-xx);
        }
      }

      .Hero__wrapper-form {
        margin-top: 1.5rem;
        max-width: 440px;
        padding: 2rem;
        border-radius: var(--radius);
        border: 1px solid var(--grey-3);

        .Hero__wrapper-form-ingredients {
          padding: 0.5rem var(--font-md);
        }
      }
    }
  }
`;
