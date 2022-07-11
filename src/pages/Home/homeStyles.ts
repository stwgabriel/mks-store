import styled from 'styled-components';

const HomeContainer = styled.div`
  header {
    background: ${({ theme }) => theme.color.primary.main};
    box-shadow: 0 0.5rem 1rem #0000001a;

    display: flex;

    min-height: 10rem;
  }
`;

export { HomeContainer };
