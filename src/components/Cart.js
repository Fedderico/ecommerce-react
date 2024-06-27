import React from 'react';

function Cart({ cart, removeFromCart }) {
  const handlePayment = () => {
    alert('El pago ha sido realizado. Su producto se está enviando.');
  };

  return (
    <div className="container mt-5">
      <h2>Carro de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carro.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.cartId} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.cartId)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <button className="btn btn-success mt-3" onClick={handlePayment}>
            Realizar Pago
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;

