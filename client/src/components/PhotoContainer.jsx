import React from 'react';
import styled from 'styled-components';
import { PhotoModContainerStyle, PhotoModImageStyle } from './styledComponents.jsx';

const PhotoContainer = ({siteData, pictures, setModalOn}) => {

  return (
    <PhotoModContainerStyle>
      <PhotoModImageStyle src={siteData.pictures[0].picUrl} onClick={() => setModalOn(true)}/><PhotoModImageStyle src={siteData.pictures[1].picUrl} onClick={() => setModalOn(true)}/><PhotoModImageStyle src={siteData.pictures[2].picUrl} onClick={() => setModalOn(true)}/>
    </PhotoModContainerStyle>
  )
}

export default PhotoContainer;