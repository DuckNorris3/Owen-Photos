import React from 'react';
import styled from 'styled-components';
import { PhotoModContainerStyle, PhotoModImageStyle } from './styledComponents/PhotoModStyledComponents.jsx';

const PhotoContainerEntry = ({siteData, setModalOn, picIndex, setCurrentPicIndex}) => {

  const photoClickEntryClickHandler = () => {
    setModalOn(true);
    setCurrentPicIndex(picIndex);
  }

  const {
    userName,
    userPic,
    postedOn,
    location,
    pictures
  } = siteData;

  return (
    <PhotoModImageStyle
      src={pictures[picIndex].picUrl}
      onClick={() => photoClickEntryClickHandler()}
    />
  )
}

export default PhotoContainerEntry;