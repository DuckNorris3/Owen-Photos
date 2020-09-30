import styled from 'styled-components';

const ParentContainer = styled.div`
  margin: 1% auto;
  display: flex;
  justify-content: space-between;
  border: 2px solid red;
  width: 95vw;
  height: 95vh;
`;

const VerticalContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5em;
  align-items: flex-start;
  border: 2px solid blue;
`;

const VerticalContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5em;
  align-items: flex-end;
  border: 2px solid blue;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: .5em;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid orange;
  height: 4em;
  width: 96%;
`

const InfoSubcontainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  height: 98%;
  width: 50%;
  margin-left: 1em;
`

const LocationInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border: 2px solid #333;
  height: 1em;
  width: 18em;
`

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid purple;
  height: 2.7em;
  width: 18em;
`

const UserNameDateMiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid pink;
  height: 100%;
  width: 14em;
`

const PhotoPlaceHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  border: 2px solid green;
  height: 80%;
  width: 80%;
`

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid green;
  height: 100%;
  width: 65%;
`;

export { ParentContainer, VerticalContainerLeft, VerticalContainerRight, PhotoContainer, InfoContainer, UserInfoContainer, PhotoPlaceHolder, UserNameDateMiniContainer, InfoSubcontainerLeft, LocationInfoContainer };
