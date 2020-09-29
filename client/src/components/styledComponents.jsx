import styled from 'styled-components';

const PhotoModContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 37% 37% 80%;
  grid-column-gap: 15px;
  width: 98%;
  height: 24em;
  margin: 10px 15px 10px 10px;
  padding: 0;
  overflow: hidden;
`;

const PhotoModImageStyle = styled.img`
  border: 2px solid red;
  height: 99%;
  padding: 0;
  margin-right: 15px;
`;

const PhotoModEntryStyle = styled.div`
  background-color: green;
  height: 99%;
  padding: 0;
  margin-right: 15px;
`;

export { PhotoModContainerStyle, PhotoModEntryStyle, PhotoModImageStyle };