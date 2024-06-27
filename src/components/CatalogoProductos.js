import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Repuestos de gas', image: '/image/plomeria.jpg', link: '/products#gas' },
  { id: 2, name: 'Repuestos de refrigeración', image: '/image/refrigeracion.jpg', link: '/products#refrigeracion' },
  { id: 3, name: 'Respuestos de agua', image: '/image/plomeria-de-agua.jpg', link: '/products#agua' },
  // Agrega más productos según sea necesario
];

function CatalogoProductos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Catálogo de Productos</h2>
      <div className="row justify-content-center">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center mb-3">{product.name}</h5>
                <p className="card-text text-center mb-3">Descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to={product.link} className="btn btn-primary card-btn mx-auto">Ver Producto</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoProductos;
