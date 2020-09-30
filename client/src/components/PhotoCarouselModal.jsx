import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { ParentContainer, VerticalContainerLeft, VerticalContainerRight, PhotoContainer, InfoContainer, PhotoPlaceHolder, UserNameDateMiniContainer, UserInfoContainer, InfoSubcontainerLeft, LocationInfoContainer } from './styledComponents/CarouselStyledDivs.jsx';

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
    backgroundColor: 'rgba(0, 0, 0, .75)',
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
                93/100
                <button>&lt;</button>
                <span></span>
              </VerticalContainerLeft>
              <PhotoContainer>
                <InfoContainer>
                  <InfoSubcontainerLeft>
                    <UserInfoContainer>
                      O&nbsp;&nbsp;&nbsp;
                      <UserNameDateMiniContainer>

                      </UserNameDateMiniContainer>
                    </UserInfoContainer>
                    <LocationInfoContainer/>
                  </InfoSubcontainerLeft>
                  <button>Helpful</button>
                </InfoContainer>
                <PhotoPlaceHolder />
              </PhotoContainer>
              <VerticalContainerRight>
                <button onClick={close}>X</button>
                <button>&gt;</button>
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

