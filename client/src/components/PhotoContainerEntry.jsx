import React from 'react';
import styled from 'styled-components';
import { PhotoModContainerStyle, PhotoModImageStyle } from './styledComponents/PhotoModStyledComponents.jsx';

const PhotoContainerEntry = ({siteData, pictures, setModalOn, picIndex, setCurrentPicIndex}) => {

  const photoClickEntryClickHandler = () => {
    setModalOn(true);
    setCurrentPicIndex(picIndex);
  }

  return (
    <PhotoModImageStyle src={siteData.pictures[picIndex].picUrl} onClick={() => photoClickEntryClickHandler()}/>
  )
}

export default PhotoContainerEntry;