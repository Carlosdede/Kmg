import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
      <p className="mt-1 text-gray-600">R$ {product.price}</p>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;
