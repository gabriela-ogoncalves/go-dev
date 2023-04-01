import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const YoutubeEmbed = ({ url }) => (
  <div className="video-responsive">
    <iframe
      width="80%"
      height="80%"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired
};

export default YoutubeEmbed;
