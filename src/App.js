import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Store/CartContextProvider";
const App = () => {
  const [cardIsVisible, setCardIsVisible] = useState(false);
  const showCartHandler = () => {
    setCardIsVisible(true);
  };
  const hideCartHandler = () => {
    setCardIsVisible(false);
  };
  return (
    <CartContextProvider>
      {cardIsVisible && <Cart cartHandler={hideCartHandler} />}
      <Header headerCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
};

export default App;
