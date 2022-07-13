// icons
import trashIcon from '../../assets/icons/trash.svg';
import currencyFormatter from '../../utils/currencyFormatter';

// local styles
import { CartItemContainer } from './cartItemStyles';

interface CartItemProps {
  imagePath: string;
  title: string;
  price: number;
}

function CartItem(
  {
    imagePath, title, price,
  }: CartItemProps,
) {

  return (
    <CartItemContainer>

      <div className="item-image">
        <img src={imagePath} alt="item" />
      </div>

      <h2 className="item-title">{title}</h2>

      <span
        className="item-price"
      >
        {currencyFormatter({ currency: 'BRL', value: price })}
      </span>

      <div className="amount-controller">
        <button type="button">
          -
        </button>
        <span>0</span>
        <button type="button">
          +
        </button>
      </div>

      <button
        type="button"
        className="remove-item"
      >
        <img src={trashIcon} alt="remover" />
      </button>

    </CartItemContainer>
  );
}

export default CartItem;
