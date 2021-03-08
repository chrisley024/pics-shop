import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

function Navbar(props) {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand mb-0 h1" to="/">
          Pics Shop
        </Link>
        <Link className="navbar-brand mb-0 h1" to="/cart">
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
