import { Circle, Text, Wrapper } from './styles';
import { useParams } from 'react-router-dom';

const Number = ({type, items, currentItem, isLessonScreen, user}) => {
  const param = useParams();

  return(
    <section id='number'>
      <Wrapper isLessonScreen={isLessonScreen} >
        {items && items.map((item, i) => {
          const stts = item.status || 'progress';
          const isCurrentItem = isLessonScreen && currentItem?.id === item.id;
          const redirect = user ? `/trilhas/${item.trilha}/${param.id || param.trilha}/${type}/${item.id}` : '/login';

          return(
            <Circle
              key={i}
              status={stts}
              href={redirect}
              currentItem={isCurrentItem}
            >
              <Text
                status={stts}
                currentItem={isCurrentItem}
              >
                { isLessonScreen ? item.id : item.index }
              </Text>
            </Circle>
          );
        })}
      </Wrapper>
    </section>
  );
};

export default Number;