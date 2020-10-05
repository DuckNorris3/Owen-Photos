import styled from 'styled-components';

const ParentContainer = styled.div`
  margin: 1% auto;
  display: flex;
  justify-content: space-between;
  width: 95vw;
  height: 95vh;
`;

const VerticalContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5em;
  margin-right: 42px;
  align-items: flex-start;
`;

const VerticalContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 5em;
  align-items: flex-end;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: .5em;
  justify-content: space-between;
  align-items: flex-start;
  height: 4em;
  width: 96%;
`

const InfoSubcontainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 98%;
  width: 50%;
  margin-left: 1em;
`

const LocationInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
  height: 1em;
  width: 18em;
`

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 2.7em;
  width: 18em;
`

const UserNameDateMiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 14em;
`

const PhotoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.4em;
  margin-bottom: 20px;
  height: 80%;
  width: 80%;
`

const PhotoAndCaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 65%;
`;

export { ParentContainer, VerticalContainerLeft, VerticalContainerRight, PhotoAndCaptionContainer, InfoContainer, UserInfoContainer, PhotoHolder, UserNameDateMiniContainer, InfoSubcontainerLeft, LocationInfoContainer };
