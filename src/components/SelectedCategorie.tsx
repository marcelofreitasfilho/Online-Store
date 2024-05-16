import { useState, useEffect } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
import { Product } from '../types/types';

type ParamIdProp = {
  paramId: string;
};

function SelectedCategorie({ paramId }: ParamIdProp) {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const fetchSelectedCateghorie = async () => {
      const data = await getProductsFromCategoryAndQuery(paramId, '');
      const result = await data.results;
      setProductList(result);
    };
    fetchSelectedCateghorie();
  }, [paramId]);
  return (
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
  );
}
// quase fiz merda
export default SelectedCategorie;
