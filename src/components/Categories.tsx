import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';
import SelectedCategorie from './SelectedCategorie';

function Categories() {
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [checkState, setCheckState] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const noMLBid = event.target.value.substring(3);
    setCheckState(noMLBid);
  };

  useEffect(() => {
    const list = async () => {
      const categories = await getCategories();
      setCategoriesList(categories);
    };
    list();
  }, []);

  return (
    <div>

      <form>
        {categoriesList.map((categorie) => (
          <div key={ categorie.id }>
            <input
              type="radio"
              name="categorie"
              value={ categorie.id }
              onChange={ handleInputChange }
            />
            <label data-testid="category">{ categorie.name }</label>
          </div>
        ))}
      </form>
      <SelectedCategorie paramId={ checkState } />

    </div>
  );
}

export default Categories;
