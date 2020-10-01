import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { ParentContainer, VerticalContainerLeft, VerticalContainerRight, PhotoAndCaptionContainer, InfoContainer, PhotoHolder, UserNameDateMiniContainer, UserInfoContainer, InfoSubcontainerLeft, LocationInfoContainer } from './styledComponents/CarouselStyledDivs.jsx';
import { XButton, NavButton, PhotoNumber, HelpfulButton, UserImage, UserName, PostedOn, LocationMarkerImage, LocationText, Photo } from './styledComponents/CarouselStyledElements.jsx';

const PhotoCarouselModal = ({on, siteData, pictures, setModalOn, picIndex, setCurrentPicIndex, close}) => {

  const MODAL_STYLE = {
    position: 'fixed',
    padding: '.2% 3%',
    zIndex: 1000
  };

  const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .89)',
    zIndex: 1000
  };

  let carouselGang = [];

  for (let i = 0; i < 10; i++) {
    carouselGang.push(<p>Carousel Gang Gang</p>);
  }

  if(!on) {
    return null;
  } else {
    const portalContainer = document.getElementById('portal');
    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLE}>
          <div style={MODAL_STYLE}>
            <ParentContainer>
              <VerticalContainerLeft>
                <PhotoNumber>3/5</PhotoNumber>
                <NavButton onClick={() => console.log('left')}>&lt;</NavButton>
                <span></span>
              </VerticalContainerLeft>
              <PhotoAndCaptionContainer>
                <InfoContainer>
                  <InfoSubcontainerLeft>
                    <UserInfoContainer>
                      <UserImage src="https://obwfec-tenthop.s3.amazonaws.com/ICON7.jpg" />
                      <UserNameDateMiniContainer>
                        <UserName>Owen W.</UserName>
                        <PostedOn>Posted on August 17th, 2020</PostedOn>
                      </UserNameDateMiniContainer>
                    </UserInfoContainer>
                    <LocationInfoContainer>
                      <LocationMarkerImage />
                      <LocationText>Beautiful gorgeous campground blah blah blah</LocationText>
                    </LocationInfoContainer>
                  </InfoSubcontainerLeft>
                  <HelpfulButton>Helpful&nbsp;&nbsp;&nbsp;3</HelpfulButton>
                </InfoContainer>
                <PhotoHolder><Photo src="https://obwfec-tenthop.s3.amazonaws.com/IMG4.jpg"/></PhotoHolder>
                <LocationText>Blah blah caption</LocationText>
              </PhotoAndCaptionContainer>
              <VerticalContainerRight>
                <XButton onClick={close}>X</XButton>
                <NavButton onClick={() => console.log('right')}>&gt;</NavButton>
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

