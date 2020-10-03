import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import moment from 'moment';

import {
  ParentContainer,
  VerticalContainerLeft,
  VerticalContainerRight,
  PhotoAndCaptionContainer,
  InfoContainer, PhotoHolder,
  UserNameDateMiniContainer,
  UserInfoContainer,
  InfoSubcontainerLeft,
  LocationInfoContainer
} from './styledComponents/CarouselStyledDivs.jsx';

import {
  XButton,
  NavButton,
  PhotoNumber,
  HelpfulButton,
  UserImage,
  UserName,
  PostedOn,
  LocationMarkerImage,
  LocationText,
  Photo
} from './styledComponents/CarouselStyledElements.jsx';

import {
  overlayStyle,
  modalStyle
} from './styledComponents/ModalStyles.jsx';

import {
  goLeft, goRight
} from '../helper/numberCycle.js';

const PhotoCarouselModal = ({
  on,
  siteData,
  setModalOn,
  setCurrentPicIndex,
  currentPicIndex,
  incrementHelpful,
  close}) => {

  if (!on) {
    return null;
  } else {
    const portalContainer = document.getElementById('portal');

    const {
      userName,
      userPic,
      postedOn,
      location,
      pictures
    } = siteData;

    return ReactDom.createPortal(
      <>
        <div id="overlaystyle" style={overlayStyle}>
          <div id="modalstyle" style={modalStyle}>
            <ParentContainer id="parent">
              <VerticalContainerLeft    id="vertical-container-left">
                <PhotoNumber id="photo-number">{currentPicIndex + 1}/{pictures.length}</PhotoNumber>
                <NavButton
                  id="left-button"
                  onClick={() => setCurrentPicIndex(goLeft(currentPicIndex, pictures.length - 1))}>&lt;
                </NavButton>
                <span></span>
              </VerticalContainerLeft>

              <PhotoAndCaptionContainer id="photo-and-caption">
                <InfoContainer>
                  <InfoSubcontainerLeft>
                    <UserInfoContainer>
                      <UserImage src={userPic} />
                      <UserNameDateMiniContainer>
                        <UserName>{userName}</UserName>
                        <PostedOn>Posted on {moment(postedOn).format('LL')}</PostedOn>
                      </UserNameDateMiniContainer>
                    </UserInfoContainer>
                    <LocationInfoContainer id="location-info">
                      <LocationMarkerImage />
                      <LocationText id="location-text">{location}</LocationText>
                    </LocationInfoContainer>
                  </InfoSubcontainerLeft>
                  <HelpfulButton id="helpful" onClick={incrementHelpful}>Helpful&nbsp;&nbsp;&nbsp;{pictures[currentPicIndex].helpful}</HelpfulButton>
                </InfoContainer>
                <PhotoHolder id="photo-holder"><Photo src={pictures[currentPicIndex].picUrl}/></PhotoHolder>
                <LocationText id="location">{pictures[currentPicIndex].caption}</LocationText>
              </PhotoAndCaptionContainer>

              <VerticalContainerRight id="vertical-container-right">
                <XButton id="x" onClick={close}>X</XButton>
                <NavButton
                  id="right-button"
                  onClick={() => setCurrentPicIndex(goRight(currentPicIndex, pictures.length - 1))}>&gt;</NavButton>
                <span></span>
              </VerticalContainerRight>
            </ParentContainer>
          </div>
        </div>
      </>,
      portalContainer
    );
  }

}

export default PhotoCarouselModal;

