import { Product } from '../types/types';

function ProductList(prop: Product) {
  const { title, thumbnail, price } = prop;
  return (
    <div data-testid="product">
      <img src={ thumbnail } alt="" />
      <h1>{ title }</h1>
      <p>{ price }</p>
      <button>Adicionar ao carrinho</button>
    </div>
  );
}

export default ProductList;
