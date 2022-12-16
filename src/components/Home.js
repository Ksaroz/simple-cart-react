import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import hd from "../assets/hot-dog.png";
import mb from "../assets/meat-ball.jpg";

const Home = () => {
  const productList = [
    {
      id: "asd",
      name: "Meat ball",
      price: 400,
      imgSrc: mb,
    },
    {
      id: "asdf",
      name: "hot dog",
      price: 200,
      imgSrc: hd,
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    toast.success("Added to cart");
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ id, name, price, imgSrc, handler }) => (
  <div className="product-card">
    <img src={imgSrc} alt={name} />
    <div className="p-desc">
      <p>{name}</p>
      <h4>${price}</h4>
    </div>
    <button onClick={() => handler({ id, name, price, imgSrc, qty: 1 })}>
      Add to cart
    </button>
  </div>
);

export default Home;
