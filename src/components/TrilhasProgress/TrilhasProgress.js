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
    return 'trilho-desktop-small';
  } else if (isMobile) {
    return 'trilho-mobile';
  } else {
    return '';
  }
};

const TrilhasProgress = ({
  performance,
  from
}) => {
  const profileInfo = from === 'profile-info';
  const data = performance && SummaryService.formatTrilhaData(performance);
  const type = data.length <= 4 ? 'small' : 'big';
  const isSmall = type === 'small';

  return(
    <Grid
      title={!profileInfo && 'Seu progresso'}
      titleStyle={!profileInfo && isMobile && 'title-grid-mobile'}
      items={data}
      row={getRow(isSmall)}
      style={setStyle(isSmall)}
      from={from}
    />
  );
};

export default TrilhasProgress;