import React from 'react';
import styled from 'styled-components';
import { PhotoModContainerStyle, PhotoModImageStyle } from './styledComponents.jsx';

const PhotoContainerEntry = ({siteData, pictures, setModalOn, picIndex, setCurrentPicIndex}) => {

  const pceClickHandler = () => {
    setModalOn(true);
    setCurrentPicIndex(picIndex);
  }

  return (
    <PhotoModImageStyle src={siteData.pictures[picIndex].picUrl} onClick={() => pceClickHandler()}/>
  )
}

export default PhotoContainerEntry;