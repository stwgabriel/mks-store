import styled from 'styled-components';
import { appearAnimation, slideDownAnimation } from '../../styles/animations';

const CartContainer = styled.div`
  animation: ${appearAnimation} 0.25s backwards;
  background: ${({ theme }) => theme.color.background};
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #0003;

  position: absolute;
  top: 120%;
  right: 0;

  width: 50rem;

  overflow: hidden;

  z-index: 500;

  header {
    animation: ${slideDownAnimation} 0.25s 0.05s backwards;
    /* border-bottom: solid 0.2rem #0001; */
    box-shadow: 0 0 0.5rem #0002;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;

    h2 {
      font-size: 2.2rem;
    }

    .close-button {
      background: ${({ theme }) => theme.color.gray.light};
      border: none;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.8rem;
      width: 3.8rem;

      transition: background 0.25s;

      &:hover {
        background: ${({ theme }) => theme.color.gray.main};
      }
    }
  }

  main {
    animation: ${slideDownAnimation} 0.25s 0.08s backwards;
    height: 35rem;

    padding: 2rem;

    position: relative;
    overflow-y: auto;
  }

  footer {
    animation: ${slideDownAnimation} 0.25s 0.1s backwards;
    box-shadow: 0 0 0.5rem #0002;
    padding: 1rem;

    position: relative;
    z-index: 100;

    button.buy-button {
      padding: 2rem;

      span {
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 595px) {
    max-width: calc(100vw - 2rem);
    width: 100vw;

    right: -1rem;

    main {
      height: 44rem;
    }
  }
`;

export { CartContainer };
