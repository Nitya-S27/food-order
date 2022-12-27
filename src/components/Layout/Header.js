import React, { Fragment } from "react";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const cartVisibleHandler = () => {
    props.headerCartHandler();
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartVisible={cartVisibleHandler} />
      </header>
      <div className={classes[`main-image`]}>
        <img src={meals} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
