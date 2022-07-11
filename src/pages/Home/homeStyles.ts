import styled from 'styled-components';

const HomeContainer = styled.div`
  header {
    background: ${({ theme }) => theme.color.primary.main};
    box-shadow: 0 0.5rem 1rem #0000001a;
    color: ${({ theme }) => theme.color.textReverse};

    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 10rem;

    padding: 2rem 4rem;

    h1 {

      font-size: 2.8rem;

      span {
        font-size: 1.8rem;
        font-weight: 400;
      }
    }

    .cart-button {
      background: ${({ theme }) => theme.color.background};
      border: none;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      font-weight: 600;

      display: flex;
      align-items: center;

      padding: 0.8rem 1.6rem;

      img {
        margin-right: 1.4rem;
        width: 2rem;
      }
    }
  }

  main.page-main {
    padding: 4rem;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: fit-content;
      margin: 0 auto;
    }
  }
`;

export { HomeContainer };
