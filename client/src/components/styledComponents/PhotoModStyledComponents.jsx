import styled from 'styled-components';

const PhotoModContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 52%;
  grid-column-gap: 1.1em;
  width: 99%;
  height: 34em;
  margin: 10px 12px 10px 7px;
  margin-right: 5px;
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