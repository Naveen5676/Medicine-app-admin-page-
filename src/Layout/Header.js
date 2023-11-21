import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./Header-cart-button";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medicine Shop Admin Page</h1>
        <HeaderCartButton onbtnClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};
export default Header;
