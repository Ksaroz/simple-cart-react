import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="cart-header">
      <h2>
        <Link to={"/"}>LOGO</Link>
      </h2>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <GiShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
