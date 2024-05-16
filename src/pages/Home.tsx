import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Product } from '../types/types';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';

function Home() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showMessage, setMessage] = useState(true);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = await getProductsFromCategoryAndQuery('', inputValue);
    const result = await data.results;
    setProductList(result);
    setMessage(false);
  };

  return (
    <div>
      <div>
        <Categories />
      </div>
      <form action="">
        <label htmlFor="input">
          <input
            type="text"
            id="input"
            data-testid="query-input"
            placeholder="Buscar"
            value={ inputValue }
            onChange={ handleInput }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ handleSubmit }
          >
            Enviar
          </button>
        </label>
      </form>
      <div>
        {showMessage === true
          ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
          : null}
      </div>
      <div>

        {productList.length === 0 && !showMessage
          ? (
            <p>
              Produto não encontrado
            </p>)
          : (
            <div>
              <ul>
                {productList.map((p) => (
                  <li key={ p.id }>
                    <ProductList
                      id={ p.id }
                      title={ p.title }
                      thumbnail={ p.thumbnail }
                      price={ p.price }
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) }

      </div>
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Shop Cart
        </Link>
      </div>
    </div>
  );
}

export default Home;
