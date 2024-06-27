import React from 'react';

const products = {
  gas: [
    { id: 1, name: 'Válvula de Gas', image: '/image/valvula-de-gas.jpg' },
    { id: 2, name: 'Regulador de Gas', image: '/image/regulado-de-gas.jpg' },
    { id: 3, name: 'Manguera de Gas', image: '/image/manguera-de-gas.jpg' },
    { id: 4, name: 'Conector de Gas', image: '/image/conector-para-gas.jpeg' },
    { id: 5, name: 'Chispero', image: '/image/chispero.jpg' },
    { id: 6, name: 'Caños de aluminio', image: '/image/aluminio.jpg' },
    { id: 7, name: 'Estufas', image: '/image/estufas.jpg' },
    { id: 8, name: 'Termotanques', image: '/image/Termotanques-Electricos.png' }
  ],
  refrigeracion: [
    { id: 9, name: 'Compresor de Refrigeración', image: '/image/compresor.jpg' },
    { id: 10, name: 'Termostato de Refrigeración', image: '/image/termostato.jpg' },
    { id: 11, name: 'Ventilador de Refrigeración', image: '/image/forzador.jpg' },
    { id: 12, name: 'Evaporador de Refrigeración', image: '/image/evaporado.jpg' },
    { id: 13, name: 'Manifold', image: '/image/manifold.jpg' },
    { id: 14, name: 'Filtro de Refrigeración', image: '/image/filtro.jpg' },
    { id: 15, name: 'Caños de cobre', image: '/image/caños-de-cobre.jpeg' },
    { id: 16, name: 'Gas Refrigerante', image: '/image/gas-refrigerante.jpeg' }
  ],
  agua: [
    { id: 17, name: 'Bomba de Agua', image: '/image/bomba-de-agua.jpg' },
    { id: 18, name: 'Filtro de Agua', image: '/image/filtro-de-agua.jpeg' },
    { id: 19, name: 'Caños de termofusion', image: '/image/termofusion.jpg' },
    { id: 20, name: 'valvula para calefon', image: '/image/valvula-de-agua.jpeg' },
    { id: 21, name: 'manguera de carga', image: '/image/manguera-de-lavarropas.jpg' },
    { id: 22, name: 'Electro Valvula', image: '/image/valvula-de-entrada-de-agua.jpg' },
    { id: 23, name: 'Soporte', image: '/image/soporte.jpg' },
    { id: 24, name: 'barras de magnesio', image: '/image/barra.jpg' }
  ]
};

function ProductList({ addToCart }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Nuestros Productos</h2>

      <h3 id="#gas">Repuestos de Gas</h3>
      <div className="row">
        {products.gas.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{product.name}</h5>
                <button 
                  className="btn btn-primary mt-auto" 
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carro
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 id="#refrigeracion">Repuestos de Refrigeración</h3>
      <div className="row">
        {products.refrigeracion.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{product.name}</h5>
                <button 
                  className="btn btn-primary mt-auto" 
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carro
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 id="#agua">Repuestos de Agua</h3>
      <div className="row">
        {products.agua.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{product.name}</h5>
                <button 
                  className="btn btn-primary mt-auto" 
                  onClick={() => addToCart(product)}
                >
                  Agregar al Carro
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
