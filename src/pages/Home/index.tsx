import { useRef, useState } from 'react';

// icons
import cartIcon from '../../assets/icons/cart.svg';
import Cart from '../../components/Cart';

// local styles
import { HomeContainer } from './homeStyles';
import Products from '../../components/Products';

function Home() {

  // refs
  const cartTriggerRef = useRef(null);

  // states
  const [renderCart, setRenderCart] = useState(false);
  function onCartRender() {
    setRenderCart(prevState => !prevState);
  }

  return (
    <HomeContainer>
      <header className="page-header">

        <h1 className="page-logo">
          MKS
          {' '}
          <span>Sistemas</span>
        </h1>

        <div className="cart-container">
          <button
            ref={cartTriggerRef}
            type="button"
            className="cart-button"
            onClick={onCartRender}
          >
            <img src={cartIcon} alt="cart" />
            0
          </button>

          {renderCart && (

            <Cart
              renderModal={() => onCartRender()}
              additionalTrigger={cartTriggerRef?.current || undefined}
            />
          )}
        </div>
      </header>

      <main className="page-main">
        <Products />
      </main>
      <footer>{' '}</footer>
    </HomeContainer>
  );
}

export default Home;
