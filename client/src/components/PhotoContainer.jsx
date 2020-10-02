import React from 'react';
import styled from 'styled-components';
import PhotoContainerEntry from './PhotoContainerEntry.jsx';
import { PhotoModContainerStyle, PhotoModImageStyle } from './styledComponents/PhotoModStyledComponents.jsx';

const PhotoContainer = ({siteData, setModalOn, setCurrentPicIndex}) => {

  return (
    <PhotoModContainerStyle>
      <PhotoContainerEntry
        siteData={siteData}
        setModalOn={setModalOn}
        picIndex={0}
        setCurrentPicIndex={setCurrentPicIndex}/>
      <PhotoContainerEntry
        siteData={siteData}
        setModalOn={setModalOn}
        picIndex={1}
        setCurrentPicIndex={setCurrentPicIndex}/>
      <PhotoContainerEntry
        siteData={siteData}
        setModalOn={setModalOn}
        picIndex={2}
        setCurrentPicIndex={setCurrentPicIndex}/>
    </PhotoModContainerStyle>
  )
}

export default PhotoContainer;