import React from 'react';

// Images
import banner from '../images/brand_white_4x3.png';

// Styles
import styles from '../styles/styles';

const Copyright = (props) => {
  return(
    <img
      src={banner}
      alt='logo'
      style={{...styles.responsiveImage, ...props.style}}
    />
  )
}

export default Copyright;