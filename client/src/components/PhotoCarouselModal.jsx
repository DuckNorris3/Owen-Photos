import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const PhotoCarouselModal = ({on, siteData, pictures, setModalOn, picIndex, setCurrentPicIndex, close}) => {

  const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
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
            <button onClick={close}>X</button>
            {carouselGang}
          </div>
        </div>
      </>,
      portalContainer
    );
  }

}

export default PhotoCarouselModal;