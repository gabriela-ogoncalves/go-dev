import { yourProgress } from '../../helpers/lists/yourProgress';
import { isMobile } from '../../helpers/utils';
import Grid from '../Grid/Grid';
import SummaryService from '../../services/Summary';

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

const TrilhasProgress = ({
  performance,
  from
}) => {
  const profileInfo = from === 'profile-info';
  const type = yourProgress.length <= 4 ? 'small' : 'big';
  const isSmall = type === 'small';
  const data = SummaryService.formatTrilhaData(performance);

  return(
    <Grid
      title={!profileInfo && 'Seu progresso'}
      titleStyle={!profileInfo && isMobile && 'title-grid-mobile'}
      items={profileInfo ? data : yourProgress}
      row={getRow(isSmall)}
      style={setStyle(isSmall)}
      from={from}
    />
  );
};

export default TrilhasProgress;