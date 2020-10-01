import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import moment from 'moment';

import { ParentContainer, VerticalContainerLeft, VerticalContainerRight, PhotoAndCaptionContainer, InfoContainer, PhotoHolder, UserNameDateMiniContainer, UserInfoContainer, InfoSubcontainerLeft, LocationInfoContainer } from './styledComponents/CarouselStyledDivs.jsx';
import { XButton, NavButton, PhotoNumber, HelpfulButton, UserImage, UserName, PostedOn, LocationMarkerImage, LocationText, Photo } from './styledComponents/CarouselStyledElements.jsx';
import { OVERLAY_STYLE, MODAL_STYLE } from './styledComponents/ModalStyles.jsx';

import { goLeft, goRight } from '../helper/numberCycle.js'

const PhotoCarouselModal = ({on, siteData, pictures, setModalOn, setCurrentPicIndex, currentPicIndex, close}) => {

  if(!on) {
    return null;
  } else {
    console.log(siteData.pictures[currentPicIndex]);
    const portalContainer = document.getElementById('portal');
    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLE}>
          <div style={MODAL_STYLE}>
            <ParentContainer>
              <VerticalContainerLeft>
                <PhotoNumber>{currentPicIndex + 1}/{siteData.pictures.length}</PhotoNumber>
                <NavButton onClick={() => setCurrentPicIndex(goLeft(currentPicIndex, siteData.pictures.length - 1))}>&lt;</NavButton>
                <span></span>
              </VerticalContainerLeft>
              <PhotoAndCaptionContainer>
                <InfoContainer>
                  <InfoSubcontainerLeft>
                    <UserInfoContainer>
                      <UserImage src={siteData.userPic} />
                      <UserNameDateMiniContainer>
                        <UserName>{siteData.userName}</UserName>
                        <PostedOn>Posted on {moment(siteData.postedOn).format('LL')}</PostedOn>
                      </UserNameDateMiniContainer>
                    </UserInfoContainer>
                    <LocationInfoContainer>
                      <LocationMarkerImage />
                      <LocationText>{siteData.location}</LocationText>
                    </LocationInfoContainer>
                  </InfoSubcontainerLeft>
                  <HelpfulButton>Helpful&nbsp;&nbsp;&nbsp;{siteData.pictures[currentPicIndex].helpful}</HelpfulButton>
                </InfoContainer>
                <PhotoHolder><Photo src={siteData.pictures[currentPicIndex].picUrl}/></PhotoHolder>
                <LocationText>{siteData.pictures[currentPicIndex].caption}</LocationText>
              </PhotoAndCaptionContainer>
              <VerticalContainerRight>
                <XButton onClick={close}>X</XButton>
                <NavButton onClick={() => setCurrentPicIndex(goRight(currentPicIndex, siteData.pictures.length - 1))}>&gt;</NavButton>
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

