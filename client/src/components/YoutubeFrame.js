import React from "react";
import PropTypes from "prop-types";
import styles from '../styles/youtubeframe.module.css';

const YoutubeFrame = ({ embedId }) => (
  <div className={styles.videoresponsive}>
    <iframe
      width="303"
      height="300"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeFrame.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeFrame;