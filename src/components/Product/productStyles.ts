import styled from 'styled-components';

const ProductContainer = styled.li`
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #0001;
  list-style: none;

  min-height: 35rem;
  width: 100%;
  max-width: 27rem;

  overflow: hidden;

  main {
    display: flex;
    flex-direction: column;

    .product-image {
      flex: 1;
      padding: 3rem 3rem 1rem;

      img {
        height: 100%;
        max-height: 15rem;
        width: 100%;
        object-fit: contain;
      }
    }
    .product-info {
      display: grid;
      grid-template-areas: 'title price' 'description description';

      padding: 1rem;

      .product-title {
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
      }
    }
  }

  footer {
    display: flex;
  }
`;

export { ProductContainer };
