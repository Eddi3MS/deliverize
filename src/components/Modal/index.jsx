import React from "react";
import { ModalStyled } from "./index.styled";

const Modal = ({ data }) => {
  return (
    <>
      {data && (
        <ModalStyled>
          <div>
            <h2>Adicionado com Sucesso</h2>
          </div>

          <h3>{data.product}</h3>
          <p>Ingredientes:</p>
          <ul>
            {data.extras?.map((extra) => (
              <li key={extra.id}>
                <span>{extra.itemAmount}</span>
                <span>{extra.nm_item}</span>
              </li>
            ))}
          </ul>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;
