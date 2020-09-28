import React from 'react';
import styled from 'styled-components';
import { PhotoModContainerStyle, PhotoModEntryStyle } from './styledComponents.jsx';

const PhotoContainer = () => {

  return (
    <PhotoModContainerStyle>
      <PhotoModEntryStyle /><PhotoModEntryStyle /><PhotoModEntryStyle />
    </PhotoModContainerStyle>
  )
}

export default PhotoContainer;