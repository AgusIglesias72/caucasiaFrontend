import React, { useEffect, useState } from "react";
import ProdItem from "./ProdItem";
import "./Products.css";

const MainProducts = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    let response = await fetch("/api/items/");
    let data = await response.json();
    console.log("DATA", data);
    setProducts(data);
  };

  return (
    <div className="prod-container">
      {products.map((product, index) => (
        <ProdItem key={index} product={product} />
      ))}
    </div>
  );
};

export default MainProducts;
