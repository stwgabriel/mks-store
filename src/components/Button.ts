import styled from 'styled-components';

const Button = styled.button`
  background: #0f52ba;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 1.3rem;

  transition: background 0.25s ease-out;

  img {
    margin-right: 1rem;
  }

  span {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  &:hover {
    background: #0c4398;
  }

  &:active {
    background: #3575d8;
  }
`;

export default Button;
