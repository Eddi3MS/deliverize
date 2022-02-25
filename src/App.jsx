import Header from "./components/Header";

import GlobalStyle from "./styles/GlobalStyles";

import ProductSingle from "./pages/ProductSingle";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <Header />
      <ProductSingle />
    </CartProvider>
  );
}

export default App;
