import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoContainer from './PhotoContainer.jsx';
import PhotoCarouselModal from './PhotoCarouselModal.jsx';
import axios from 'axios';

const App = () => {

  const getFromDB = () => {
    axios.get('/api/campsite?siteID=7')
      .then(res => setSiteData(res.data[0]))
      .catch(err => console.log('Error: ', err));
  }

  const incrementHelpfulInDB = () => {
    const testPicArray = [
      {
        picUrl: 'https://obwfec-tenthop.s3.amazonaws.com/IMG30.jpg',
        helpful: 3,
        caption: 'Nobis nesciunt impedit qui provident voluptates cum quo a.'
      },
      {
        picUrl: 'https://obwfec-tenthop.s3.amazonaws.com/IMG6.jpg',
        helpful: 4,
        caption: 'Aut veritatis aliquam ut ut.'
      },
      {
        picUrl: 'https://obwfec-tenthop.s3.amazonaws.com/IMG21.jpg',
        helpful: 2,
        caption: 'Laborum eligendi aut sit officia voluptatem.'
      }
    ];
    axios.patch('/api/campsite?siteID=10', {newPicArray: testPicArray})
      .then(res => getFromDB())
      .catch(err => {
        console.log('ERROR: ', err);
        getFromDB();
      });
  }

  const incrementHelpful = () => {
    let newSiteData = siteData;
    newSiteData.pictures[currentPicIndex].helpful = newSiteData.pictures[currentPicIndex].helpful + 1;
    setSiteData(newSiteData);
  }

  const [siteData, setSiteData] = useState(null);
  const [modalOn, setModalOn] = useState(false);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);



  useEffect(() => {
    getFromDB();
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
        Loading data...
      </div>
    );
  }
}

export default App;