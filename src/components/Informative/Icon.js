import watchVideo from '../../assets/images/watch-video.png';
import onlineEducation from '../../assets/images/online-education.png';
import onlineGraduation from '../../assets/images/online-graduation.png';

import './styles.scss';

const Icon = ({type}) => {
  if (type === 'video-watch') {
    return(
      <img src={watchVideo} alt='video watch icon' />
    );
  }

  if (type === 'online-education') {
    return(
      <img src={onlineEducation} alt='online education icon' />
    );
  }

  if (type === 'online-graduation') {
    return(
      <img src={onlineGraduation} alt='online graduation icon' />
    );
  }

  return null;
};

export default Icon;