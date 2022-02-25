import React, { useEffect, useState } from "react";
import axios from "axios";

import burguer from "../../assets/images/foto.png";

import { ProductSingleStyled } from "./index.styled";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputActions from "../../components/Input/InputActions";
import Modal from "../../components/Modal";

const ProductSingle = () => {
  const [products, setProducts] = useState([]);
  const [extras, setExtras] = useState([]);
  const [maxExtras, setMaxExtras] = useState(0);
  const [precTalher, setPrecTalher] = useState("não");
  const [pedido, setPedido] = useState({});

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")
      .then((response) => {
        setProducts(
          response.data.map((data) => {
            return {
              ...data,
              itemAmount: 1,
              vl_total: data.vl_discount,
              id: crypto.randomUUID(),
            };
          })
        );
        setExtras(
          response.data[0].ingredients[0].itens.map((item) => {
            return {
              ...item,
              itemAmount: 0,
            };
          })
        );
      })
      .catch((error) => {
        setError(true);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const updateExtras = (id, value, price) => {
    const updatedExtras = extras.map((extra) =>
      extra.id === id
        ? { ...extra, itemAmount: value, vl_total: price * value }
        : extra
    );

    setExtras(updatedExtras);
    setMaxExtras(
      Object.values(updatedExtras).reduce(
        (total, { itemAmount }) => total + itemAmount,
        0
      )
    );
  };

  const updateProduct = (id, value, price) => {
    const updatedProduct = products.map((product) =>
      product.id === id
        ? {
            ...product,
            itemAmount: value,
            vl_total: price * value,
          }
        : product
    );

    setProducts(updatedProduct);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (products[0].itemAmount <= 0) {
      return;
    }

    const extrasToCheck = extras.filter((extra) => extra.itemAmount >= 1);
    const totalExtras = Object.values(extrasToCheck).reduce(
      (total, { vl_total }) => total + vl_total,
      0
    );

    const pedido = {
      product: products[0].nm_product,
      qtty: products[0].itemAmount,
      extras: extras.filter((extra) => extra.itemAmount >= 1),
      talher: precTalher,
      total: (
        products[0].vl_total +
        totalExtras * products[0].itemAmount
      ).toFixed(2),
    };

    setPedido(pedido);
    setModal(true);
  };

  useEffect(() => {
    if (modal === false) {
      return;
    }

    const timer = setTimeout(() => {
      setModal(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [modal]);

  useEffect(() => {
    if (maxExtras > 8) {
      return;
    }
  }, [maxExtras]);

  return (
    <ProductSingleStyled>
      {modal && <Modal data={pedido} />}
      {loading && <p style={{ margin: "auto" }}>Loading..</p>}
      {error && (
        <p style={{ margin: "auto" }}>
          Algo deu errado, tente novamente em instantes.
        </p>
      )}
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className="Hero__wrapper container">
            <div className="Hero__wrapper-info">
              <img src={burguer} alt="hamburguer" />

              <h1>{product.nm_product}</h1>

              <p>{product.description}</p>
              <div>
                <span>
                  R${product.vl_discount.toFixed(2).replace(".", ",")}
                </span>
                <span>
                  <s>R${product.vl_price.toFixed(2).replace(".", ",")}</s>
                </span>
              </div>
            </div>
            <div className="Hero__wrapper-form">
              <div className="Hero__wrapper-form-ingredients">
                <p>Adicionar Ingredientes</p>
                <p>Até {product.ingredients[0].max_itens} ingredientes</p>
              </div>
              <form onSubmit={handleSubmit}>
                {extras.map((item) => (
                  <Input
                    key={item.id}
                    label={item.nm_item}
                    price={item.vl_item}
                    priceToShow={item?.vl_total}
                    defaultValue={0}
                    maxExtras={maxExtras}
                    updateExtras={updateExtras}
                    input={{
                      id: item.id,
                      type: "number",
                      min: "0",
                      max: "8",
                      step: "1",
                    }}
                  />
                ))}

                <div className="Hero__wrapper-form-radio">
                  <div className="form-radio-question">
                    <p>Precisa de Talher?</p>
                  </div>

                  <div className="form-radio-answer">
                    <span>Sim</span>
                    <input
                      onChange={(e) => setPrecTalher(e.target.value)}
                      type="radio"
                      name="talher"
                      id="sim"
                      value="sim"
                    />
                    <label htmlFor="sim"></label>
                  </div>
                  <div className="form-radio-answer">
                    <span>Não</span>
                    <input
                      onChange={(e) => setPrecTalher(e.target.value)}
                      type="radio"
                      name="talher"
                      id="nao"
                      value="não"
                    />
                    <label htmlFor="nao"></label>
                  </div>
                </div>

                <div className="Hero__wrapper-form-total">
                  <InputActions
                    height="2.5rem"
                    altPlus={`Adicionar ${product.nm_product}`}
                    altMinus={`Remover ${product.nm_product}`}
                    updateValue={updateProduct}
                    price={product.vl_discount}
                    defaultValue={1}
                    inputProps={{
                      id: product.id,
                      type: "number",
                      min: "1",
                      max: "8",
                      step: "1",

                      "aria-label": `Escolha a quantidade de ${product.nm_product}`,
                    }}
                  />
                  <Button
                    text="Adicionar"
                    bold="500"
                    bg="var(--primary-400)"
                    color="var(--white)"
                    height="2.5rem"
                  />
                </div>
              </form>
            </div>
          </div>
        ))}
    </ProductSingleStyled>
  );
};

export default ProductSingle;
