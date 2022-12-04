import { Circle, Text, Wrapper } from './styles';

const Number = ({items}) => {

  return(
    <section id='number'>
      <Wrapper>
        {items && items.map((item, i) => {
          const stts = item.status || 'progress';
          return(
            <Circle key={i} status={stts} >
              <Text status={stts}>{item.number}</Text>
            </Circle>
          );
        })}
      </Wrapper>
    </section>
  );
};

export default Number;