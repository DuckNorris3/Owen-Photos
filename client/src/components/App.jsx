import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoContainer from './PhotoContainer.jsx';
import PhotoCarouselModal from './PhotoCarouselModal.jsx';
import loaderStyle from './styledComponents/LoaderStyles.jsx';
import axios from 'axios';

const App = () => {

  const getSiteById = (id) => {
    axios.get(`/api/campsite?siteID=${id}`)
      .then(res => setSiteData(res.data[0]))
      .catch(err => console.log('Error: ', err));
  }

  const pushHelpfulToServer = (siteID, picArray) => {
    axios.patch(`/api/campsite?siteID=${siteID}`, {newPicArray: picArray})
      .then(res => getSiteById(siteID))
      .catch(err => {
        console.log('ERROR: ', err);
        getSiteById(siteID);
      });
  }

  const [siteData, setSiteData] = useState(null);
  const [modalOn, setModalOn] = useState(false);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  const incrementHelpful = () => {
    let newSiteData = siteData;
    newSiteData.pictures[currentPicIndex].helpful = newSiteData.pictures[currentPicIndex].helpful + 1;
    pushHelpfulToServer(siteData.siteID, newSiteData.pictures);
  }

  useEffect(() => {
    getSiteById(3);
  }, []);

  if (siteData) {
    return (
      <div>
        <PhotoContainer
          siteData={siteData}
          setModalOn={setModalOn}
          setCurrentPicIndex={setCurrentPicIndex} currentPicIndex={currentPicIndex}
        />
        <PhotoCarouselModal
          on={modalOn}
          siteData={siteData}
          setModalOn={setModalOn}
          setCurrentPicIndex={setCurrentPicIndex} currentPicIndex={currentPicIndex}
          incrementHelpful={incrementHelpful}
          close={() => setModalOn(false)}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img style={loaderStyle} src="https://obwfec-tenthop.s3.amazonaws.com/loader-icon.gif"></img>
      </div>
    );
  }
}

export default App;