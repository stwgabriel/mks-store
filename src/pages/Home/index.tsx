import { HomeContainer } from './homeStyles';

// icons
import cartIcon from '../../assets/icons/cart.svg';
import Product from '../../components/Product';

function Home() {

  return (
    <HomeContainer>
      <header>

        <h1 className="page-logo">
          MKS
          {' '}
          <span>Store</span>
        </h1>

        <button
          type="button"
          className="cart-button"
        >
          <img src={cartIcon} alt="cart" />
          0
        </button>
      </header>

      <main className="page-main">
        <ul className="products-list">
          <Product
            title="Apple iPhone X 128GB"
            price={899.00}
            description="Redesigned from scratch and completely revised."
            imagePath="/iphone-x.png"
          />
          <Product
            title="Apple iPhone X 128GB"
            price={899.00}
            description="Redesigned from scratch and completely revised."
            imagePath="/iphone-x.png"
          />
          <Product
            title="Apple iPhone X 128GB"
            price={899.00}
            description="Redesigned from scratch and completely revised."
            imagePath="/iphone-x.png"
          />
          <Product
            title="Apple iPhone X 128GB"
            price={899.00}
            description="Redesigned from scratch and completely revised."
            imagePath="/iphone-x.png"
          />
        </ul>
      </main>
    </HomeContainer>
  );
}

export default Home;
