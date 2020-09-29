import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoContainer from './PhotoContainer.jsx';
import dbImport from '../../lib/dbImport.js';
import axios from 'axios';

const App = () => {

  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    axios.get('/api/campsite?siteID=5')
    .then(res => setSiteData(res.data[0]))
    .catch(err => console.log('Error: ', err));
  }, []);

  if (siteData) {
    console.log('should only fire if siteData has been fetched:', siteData.pictures);
    return (
      <div>
        <PhotoContainer siteData={siteData} pictures={siteData.pictures}/>
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