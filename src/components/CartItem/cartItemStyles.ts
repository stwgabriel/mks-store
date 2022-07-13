import styled from 'styled-components';

const CartItemContainer = styled.li`
  background: ${({ theme }) => theme.color.gray.light};
  border: solid 0.2rem #00000005;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  margin-bottom: 1rem;

  .item-image {
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 7rem;
    width: 7rem;

    padding: 0.5rem;
    margin-right: 1rem;

    img {
      width: 100%;
      object-fit: fill;
    }
  }

  .item-title {
    font-size: 1.6rem;
    margin-right: 1rem;
  }

  .item-price {
    font-size: 1.8rem;
    font-weight: 700;
    margin-right: 2rem;
  }

  .amount-controller {
    background: ${({ theme }) => theme.color.background};
    border-radius: 1rem;

    display: flex;
    align-items: center;

    height: 4rem;

    margin-right: 1rem;

    overflow: hidden;

    button {
      background: none;
      border: none;
      font-size: 1.8rem;

      height: 100%;
      width: 4rem;

      transition: background 0.25s ease-out;

      &:hover {
        background: ${({ theme }) => theme.color.gray.main};
      }
    }

    span {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0.6rem;
    }
  }

  .remove-item {
    background: none;
    border: none;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;

    transition: background 0.25s ease-out;

    &:hover {
      background: ${({ theme }) => theme.color.gray.main};
    }
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-areas:
      'image image image'
      'title title title'
      'price controller remove';

    height: fit-content;
    width: 100%;

    .item-image {
      grid-area: image;
      width: 100%;
      max-width: 20rem;
      height: fit-content;
      margin: 0 auto 2rem;
    }

    .item-title {
      grid-area: title;
      margin-bottom: 1rem;
    }

    .item-price {
      grid-area: price;
      margin-right: 1rem;
    }

    .amount-controller {
      grid-area: controller;
      height: 5rem;

      button {
        width: 4.5rem;
      }

      span {
        margin: 1.2rem;
      }
    }

    .remove-item {
      grid-area: remove;
    }
  }
`;

export { CartItemContainer };
