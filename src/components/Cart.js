import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, subTotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "deleteCartHandler",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItems
              key={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.qty}
              id={i.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet...</h1>
        )}
      </main>

      <aside>
        <div className="cart-calc">
          <h4>Subtotal:</h4>
          <p>${subTotal}</p>
        </div>
        <div className="cart-calc">
          <h5>Shipping:</h5>
          <p>${shipping}</p>
        </div>
        <div className="cart-calc">
          <h6>tax:</h6>
          <p>${tax}</p>
        </div>
        <hr />
        <div className="cart-calc">
          <h3>Total:</h3>
          <p>${total}</p>
        </div>
      </aside>
    </div>
  );
};

const CartItems = ({
  imgSrc,
  name,
  price,
  qty,
  id,
  increment,
  decrement,
  deleteHandler,
}) => (
  <div className="cartItems">
    <img src={imgSrc} alt="hello-img" />
    <div className="cartItem-detail">
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
    <div className="cartItem-quantity">
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <div className="cartItem-action">
      <RiDeleteBin6Fill onClick={() => deleteHandler(id)} />
    </div>
  </div>
);

export default Cart;
