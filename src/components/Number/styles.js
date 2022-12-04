import styled from 'styled-components';

const Wrapper = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: repeat(10,1fr);
  gap: 0.8rem;
  grid-auto-rows: minmax(50px,auto);
  place-items: center;
  margin: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(5,1fr);
    margin: 0.5rem;
    gap: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(15,1fr);
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${
    props => props.status === 'done' 
      ? 'var(--success-color)' 
      : 'var(--progress-color)'
  };
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  box-shadow: 2px 1px 5px 2px rgb(0 0 0 / 60%);
`;

const Text = styled.span`
  padding-top: 2px;
  color: ${
    props => props.status === 'done' 
      ? '#fff' 
      : 'var(--go-dev-text)'
  };
  font-weight: 500;
  font-size: 18px;
`;

export {
  Wrapper,
  Circle,
  Text
};