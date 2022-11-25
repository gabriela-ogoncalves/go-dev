import Grid from '../Grid/Grid';

import { trilhas } from '../../helpers/lists/trilhas';

const TrilhasSuggest = () => {
  return(
    <Grid title='Sugestões para você' items={trilhas} />
  );
};

export default TrilhasSuggest;