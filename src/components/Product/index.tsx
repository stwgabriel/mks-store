// icons
import shoppingBagIcon from '../../assets/icons/shopping-bag.svg';
import currencyFormatter from '../../utils/currencyFormatter';
import Button from '../Button';

// local styles
import { ProductContainer } from './productStyles';

interface ProductProps {
  imagePath: string;
  title: string;
  price: number;
  description: string;
}

function Product({
  imagePath, title, price, description,
}: ProductProps) {

  return (
    <ProductContainer>
      <main>

        <div className="product-image">
          <img src={imagePath} alt="" />
        </div>

        <div className="product-info">
          <h2 className="product-title">
            {title}
          </h2>
          <div className="product-price">
            <span>{currencyFormatter({ currency: 'BRL', value: price })}</span>
          </div>
          <p className="product-description">
            {description}
          </p>
        </div>
      </main>
      <footer>
        <Button type="button" className="add-to-cart">
          <img src={shoppingBagIcon} alt="" />
          <span>comprar</span>
        </Button>
      </footer>
    </ProductContainer>
  );
}

export default Product;
