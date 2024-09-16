const API_URL = "http://localhost:3000";

// Função para buscar todos os produtos
export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    throw error; // Re-throw para que a chamada da função saiba que ocorreu um erro
  }
};

// Função para buscar um produto específico
export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar o produto:", error);
    throw error; // Re-throw para que a chamada da função saiba que ocorreu um erro
  }
};
