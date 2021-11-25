import React from "react";

const ProdItem = ({ product }) => {
  return (
    <div className="prod-item">
      <img
        height="80px"
        width="80px"
        src={`http://127.0.0.1:8000${product.image}`}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Agregar al Carrito</button>
    </div>
  );
};

export default ProdItem;
