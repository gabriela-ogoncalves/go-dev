import Grid from '../Grid/Grid';

import { getRow, setStyle } from '../../helpers/utils';

const TrilhasSuggest = ({ items }) => {

  if (items) {
    const type = items.length <= 4 ? 'small' : 'big';
    const isSmall = type === 'small';
  
    return (
      <Grid
        title="Sugestões para você"
        items={items}
        row={getRow(isSmall)}
        style={setStyle(isSmall)}
      />
    );
  }

  return;
};

export default TrilhasSuggest;