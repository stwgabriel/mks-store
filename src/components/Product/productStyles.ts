import styled from 'styled-components';
import { slideDownAnimation } from '../../styles/animations';

const ProductContainer = styled.li`
  animation: ${slideDownAnimation} 0.25s 0.1s backwards;
  border-radius: 1rem;
  border: solid 0.2rem #00000007;
  box-shadow: 0.5rem 0.5rem 1.5rem #0001;
  list-style: none;

  flex: none;

  display: flex;
  flex-direction: column;

  height: 40rem;
  width: 100%;
  max-width: 30rem;

  margin: 2rem 1rem;

  overflow: hidden;

  main.product-main {
    display: flex;
    flex-direction: column;
    flex: 1;

    .product-image {
      flex: 1;
      padding: 3rem;
      position: relative;
      z-index: 1;

      img {
        height: 100%;
        max-height: 15rem;
        width: 100%;
        object-fit: contain;
        filter: grayscale(1);
      }
    }
    .product-info {
      display: grid;
      grid-template-areas: 'title title price' ' description description description';

      padding: 1rem;


      .product-title {
        flex:1 ;
        width: 100%;
        font-size: 1.8rem;
        font-weight: 600;
        grid-area: title;
      }

      .product-price {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        grid-area: price;

        span {
          background: #373737;
          border-radius: 0.5rem;
          color: #fff;
          font-size: 1.6rem;
          font-weight: 600;

          padding: 0.5rem 1rem;
        }
      }

      .product-description {
        font-size: 1.3rem;
        grid-area: description;
        margin: 1rem 0;

        display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      }
    }
  }

  footer {
    margin-top: auto;
    display: flex;
  }

  @media (max-width: 595px) {
    max-width: 31rem;
  }
`;

export { ProductContainer };
