import React from 'react';
import './PhotoFrame.css';
const PhotoFrame = ({size, img}) => {
  return (
    <div style={{minHeight: `${size}px`}} className='photo-frame'>
      <img src={img} alt="img" />
    </div>
  );
}

export default PhotoFrame;
