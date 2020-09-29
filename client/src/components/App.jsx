import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoContainer from './PhotoContainer.jsx';
import dbImport from '../../lib/dbImport.js';
import axios from 'axios';

const App = () => {

  const [siteData, setSiteData] = useState(null);
  const [modalOn, setModalOn] = useState(false);
  const [currentPicIndex, setCurrentPicIndex] = useState(0);

  useEffect(() => {
    axios.get('/api/campsite?siteID=5')
    .then(res => setSiteData(res.data[0]))
    .catch(err => console.log('Error: ', err));
  }, []);

  if (siteData) {
    return (
      <div>
        <PhotoContainer siteData={siteData} pictures={siteData.pictures} setModalOn={setModalOn}/>
      </div>
    );
  } else {
    return (
      <div>
        Loading data...
      </div>
    )
  }
}

export default App;