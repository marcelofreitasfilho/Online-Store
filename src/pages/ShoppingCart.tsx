import { useState } from 'react';

function ShoppingCart() {
  const [shoppingList, setShoppingCart] = useState([]);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        { shoppingList.length < 1
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)
          : null}
        ;
      </div>

    </div>
  );
}
export default ShoppingCart;
