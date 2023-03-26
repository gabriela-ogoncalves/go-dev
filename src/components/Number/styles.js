import styled from 'styled-components';

const Wrapper = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 0.8rem;
  grid-auto-rows: minmax(50px,auto);
  place-items: center;
  margin: 0.75rem;

  @media screen and (max-width: 600px) {
    margin: 0.5rem;
    gap: 0.5rem;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(7,1fr);
  }
`;

const Circle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${
    props => props.status === 'done' 
      ? 'var(--success-color)' 
      : 'var(--progress-color)'
  };
  border-radius: 50%;
  width: 1.85rem;
  height: 1.85rem;
  box-shadow: 2px 1px 5px 2px rgb(0 0 0 / 60%);
  text-decoration: none;
  border: ${
    props => props.currentItem 
      ? '3px solid var(--go-dev-text)' 
      : ''
  }
`;

const Text = styled.span`
  padding-top: 2px;
  color: ${
    props => props.status === 'done' 
      ? '#fff' 
      : 'var(--go-dev-text)'
  };
  font-weight: 500;
  font-size: 14px;
`;

export {
  Wrapper,
  Circle,
  Text
};