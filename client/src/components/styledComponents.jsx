import styled from 'styled-components';

const PhotoModContainerStyle = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: 37% 37% 80%;
  column-gap: 7px;
  width: 98%;
  height: 24em;
  margin: 10px 15px 10px 10px;
  padding: 0;
  overflow: hidden;
`;

const PhotoModEntryStyle = styled.div`
  border: 2px solid blue;
  background-color: green;
  height: 99%;
  padding: 0;
  margin-right: 15px;
`;

export { PhotoModContainerStyle, PhotoModEntryStyle };