import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { fetchAllProducts } from "../api/products";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto p-6 flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/5 pr-4 md:relative md:-left-10">
          <h2 className="font-bold mb-4 bg-black text-white p-2">Filtros</h2>
          <ul>
            <li className="mb-2 border-b border-gray-300 pb-2">
              <label>
                <input type="checkbox" className="mr-2" /> Camisetas masculinas
              </label>
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              <label>
                <input type="checkbox" className="mr-2" /> Camisetas femininas
              </label>
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              <label>
                <input type="checkbox" className="mr-2" /> Calças jeans
              </label>
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              <label>
                <input type="checkbox" className="mr-2" /> Jaquetas
              </label>
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              <label>
                <input type="checkbox" className="mr-2" /> Bermudas
              </label>
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              <label>
                <input type="checkbox" className="mr-2" /> Acessórios
              </label>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-4/5 pl-0 md:pl-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-lg relative"
                >
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}%
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-500">Kit 3 camisas Básicas</p>
                  <p className="text-xl font-bold text-black">
                    R$ {product.price}
                  </p>
                </div>
              ))
            ) : (
              <p>Carregando produtos...</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CatalogPage;
