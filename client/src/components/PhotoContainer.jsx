import React from 'react';
import styled from 'styled-components';
import { PhotoModContainerStyle, PhotoModImageStyle } from './styledComponents.jsx';

const PhotoContainer = ({siteData, pictures}) => {

  return (
    <PhotoModContainerStyle>
      <PhotoModImageStyle src={siteData.pictures[0].picUrl}/><PhotoModImageStyle src={siteData.pictures[1].picUrl}/><PhotoModImageStyle src={siteData.pictures[2].picUrl}/>
    </PhotoModContainerStyle>
  )
}

export default PhotoContainer;