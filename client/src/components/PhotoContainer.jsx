import React from 'react';
import styled from 'styled-components';
// import { PhotoModContainerStyle, PhotoModEntryStyle } from './styledComponents.jsx';

const PhotoModContainerStyle = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 37% 37% 80%;
  column-gap: 7px;
  width: 98%;
  height: 24em;
  margin: 10px 15px 10px 10px;
  padding: 0px;
  overflow: hidden;
`;

const PhotoModEntryStyle = styled.div`
  border: 2px solid blue;
  background-color: green;
  height: 99%;
  padding: 0px;
  margin-right: 15px;
`;

const PhotoContainer = () => {

  return (
    <PhotoModContainerStyle>
      <PhotoModEntryStyle /><PhotoModEntryStyle /><PhotoModEntryStyle />
    </PhotoModContainerStyle>
  )
}

export default PhotoContainer;