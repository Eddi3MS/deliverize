import React, { useContext, useState } from "react";

import Button from "../Button";
import { HeaderStyled } from "./index.styled";

import Logo from "../../assets/images/Deliverize.png";
import KeyDown from "../../assets/images/key_down.svg";
import KeyLeft from "../../assets/images/key_left.svg";
import User from "../../assets/images/account.svg";
import Cart from "../../assets/images/cart.svg";
import CartContext from "../../store/cart-context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ctx = useContext(CartContext);

  return (
    <HeaderStyled isOpen={isOpen}>
      <div className="Header__wrapper container">
        <Button
          img={KeyLeft}
          alt="Abrir menu"
          width={24}
          type="button"
          aria-label="open menu"
          className="Header__menu-mobile"
          onClick={() => setIsOpen((curr) => !curr)}
        />

        <img className="Header__logo-image" src={Logo} alt="Logomarca" />

        <div className="Header__actions-wrapper">
          <div className="Header__actions-address">
            <div>
              <p>Entrega:</p>
              <p>R. Antonio Braune, 222</p>
            </div>

            <Button img={KeyDown} alt="adicionar endereço?" width={24} />
          </div>

          <input
            type="search"
            placeholder="Busque por estabelecimento ou produtos"
          />

          <div className="Header__actions-buttons">
            <Button img={User} alt="Fazer login" width={32} text="Entrar" />

            <Button
              img={Cart}
              alt="Carinho"
              width={32}
              text="Carrinho"
              cart={ctx.cart.length}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
