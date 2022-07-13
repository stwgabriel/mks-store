// icons
import closeIcon from '../../assets/icons/close.svg';
import useClickOutside from '../../hooks/useClickOutside';
import Button from '../Button';
import CartItem from '../CartItem';

// local styles
import { CartContainer } from './cartStyles';

interface CartProps {
  renderModal: () => void;
  additionalTrigger: Element | undefined;
}

function Cart({ renderModal, additionalTrigger }: CartProps) {

  const modalRef = useClickOutside(() => {
    renderModal();
  }, additionalTrigger);

  return (
    <CartContainer ref={modalRef}>
      <div className="inner-box">
        <header>
          <h2>Carrinho</h2>
          <button
            type="button"
            className="close-button"
            onClick={renderModal}
          >
            <img src={closeIcon} alt="close" />
          </button>
        </header>
        <main>
          <ul>
            <CartItem
              title="Apple iPhone X 128GB"
              price={899.00}
              imagePath="/iphone-x.png"
            />
            <CartItem
              title="Apple iPhone X 128GB"
              price={899.00}
              imagePath="/iphone-x.png"
            />
            <CartItem
              title="Apple iPhone X 128GB"
              price={899.00}
              imagePath="/iphone-x.png"
            />
            <CartItem
              title="Apple iPhone X 128GB"
              price={899.00}
              imagePath="/iphone-x.png"
            />

          </ul>
        </main>
        <footer>
          <Button className="buy-button">
            <span>
              Finalizar Compra
            </span>
          </Button>
        </footer>
      </div>
    </CartContainer>
  );
}

export default Cart;
