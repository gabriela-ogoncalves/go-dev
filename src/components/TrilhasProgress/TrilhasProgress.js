import { yourProgress } from '../../helpers/lists/yourProgress';
import { isMobile } from '../../helpers/utils';
import Grid from '../Grid/Grid';

import './styles.scss';

const getRow = (isSmall) => {
  if (isSmall || isMobile) {
    return 1;
  }

  if (!isSmall || !isMobile) {
    return 2;
  }
};

const setStyle = (isSmall) => {
  if (!isMobile && isSmall) {
    return 'progress-desktop-small';
  } else if (isMobile) {
    return 'progress-mobile';
  } else {
    return '';
  }
};

const TrilhasProgress = () => {
  const type = yourProgress.length <= 4 ? 'small' : 'big';
  const isSmall = type === 'small';

  return(
    <Grid
      title='Seu progresso'
      titleStyle={isMobile && 'title-grid-mobile'}
      items={yourProgress}
      row={getRow(isSmall)}
      style={setStyle(isSmall)}
    />
  );
};

export default TrilhasProgress;