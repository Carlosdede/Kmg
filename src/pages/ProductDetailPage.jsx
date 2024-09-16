import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const mockProduct = {
  id: "1",
  name: "Produto Exemplo",
  description: "Descrição do produto exemplo.",
  price: "99.99",
  image: "https://via.placeholder.com/500",
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        // Simulando uma chamada à API com dados mockados
        setProduct(mockProduct);
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct(); // Chama a função para carregar os dados do produto
  }, [productId]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto mt-10 p-6">
        {loading ? (
          <p className="text-center">Carregando detalhes do produto...</p>
        ) : product ? (
          <div className="flex flex-col md:flex-row items-start border p-6 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-1/2 rounded-lg object-cover"
            />
            <div className="md:ml-6 mt-6 md:mt-0 w-full">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-lg font-semibold mb-4">
                Preço: R$ {product.price}
              </p>
              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                Comprar Agora
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center">Produto não encontrado.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
