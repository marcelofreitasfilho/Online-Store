export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await fetchCategories.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const fetchCatIdQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=$${query}`);
  const response = await fetchCatIdQuery.json();
  return response;
}

export async function getProductById(productID: string) {
  const fetchProductById = await fetch(`https://api.mercadolibre.com/items/$${productID}`);
  const response = await fetchProductById.json();
  return response;
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
