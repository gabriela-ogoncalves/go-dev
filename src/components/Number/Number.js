import { Circle, Text, Wrapper } from './styles';

const Number = ({name, type, items, currentItem}) => {
  return(
    <section id='number'>
      <Wrapper>
        {items && items.map((item, i) => {
          const stts = item.status || 'progress';
          const isCurrentItem = currentItem?.index === item.index;

          return(
            <Circle
              key={i}
              status={stts}
              href={`/trilhas/${name.toLowerCase()}/${type}/${item.index}`}
              currentItem={isCurrentItem}
            >
              <Text status={stts}>{item.index}</Text>
            </Circle>
          );
        })}
      </Wrapper>
    </section>
  );
};

export default Number;