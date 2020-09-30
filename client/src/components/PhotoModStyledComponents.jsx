import styled from 'styled-components';

const PhotoModContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 37% 37% 80%;
  grid-column-gap: 1.2em;
  width: 98%;
  height: 20em;
  margin: 10px 15px 10px 10px;
  padding: 0;
  overflow: hidden;
`;

const PhotoModImageStyle = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding-right: 15px;
  margin-right: 15px;
`;

const PhotoModEntryStyle = styled.div`
  background-color: green;
  height: 99%;
  padding: 0;
  margin-right: 15px;
`;

export { PhotoModContainerStyle, PhotoModEntryStyle, PhotoModImageStyle };