import { useEffect, useState } from 'react';
import { Product as ProductModel } from '../models';

import Product from './Product';

function Products() {

  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    (async () => {

      const dataPromise = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC');
      const reqProducts = await dataPromise.json();

      setProducts(reqProducts.products);
    })();
  }, []);

  return (
    <ul className="products-list">
      {products?.map(product => (
        <Product
          key={product.id}
          imagePath="/placeholder.webp"
          title={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  );
}

export default Products;
