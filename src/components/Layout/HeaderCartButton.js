import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/CartContext";

const HeaderCartButton = (props) => {
  const showCart = (event) => {
    event.preventDefault();
    props.cartVisible();
  };
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const itemCount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : " "
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={showCart} className={btnClass}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.bump}>Your Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
