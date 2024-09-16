import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-auto">
      <div className="container mx-auto flex justify-between items-start text-sm">
        <div className="flex flex-col">
          <div className="bg-black text-white text-base font-bold py-1 px-3 rounded-lg mb-2">
            KMG Shop
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold mb-2">INSTITUCIONAIS</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">A Marca</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Devoluções</a>
            </li>
            <li>
              <a href="#">Política de privacidade</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold mb-2">AJUDA</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Seu Cadastro</a>
            </li>
            <li>
              <a href="#">Seus pedidos</a>
            </li>
            <li>
              <a href="#">Fale Conosco</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold mb-2">MAIS KMG</h4>
          <ul className="space-y-1">
            <li>
              <a href="#">Trabalhe Conosco</a>
            </li>
            <li>
              <a href="#">Seja um Franqueado</a>
            </li>
            <li>
              <a href="#">Seja um Revendedor</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
