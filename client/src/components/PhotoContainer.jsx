import React from 'react';
import styled from 'styled-components';
import PhotoContainerEntry from './PhotoContainerEntry.jsx';
import { PhotoModContainerStyle, PhotoModImageStyle } from './PhotoModStyledComponents.jsx';

const PhotoContainer = ({siteData, pictures, setModalOn, setCurrentPicIndex}) => {

  return (
    <PhotoModContainerStyle>
      <PhotoContainerEntry siteData={siteData}pictures={pictures} setModalOn={setModalOn} picIndex={0} setCurrentPicIndex={setCurrentPicIndex}/>
      <PhotoContainerEntry siteData={siteData}pictures={pictures} setModalOn={setModalOn} picIndex={1} setCurrentPicIndex={setCurrentPicIndex}/>
      <PhotoContainerEntry siteData={siteData}pictures={pictures} setModalOn={setModalOn} picIndex={2} setCurrentPicIndex={setCurrentPicIndex}/>
    </PhotoModContainerStyle>
  )
}

export default PhotoContainer;