import React from 'react';
import styled from 'styled-components';
import PhotoContainer from './PhotoContainer.jsx';
import dbImport from '../../lib/dbImport.js';

const App = () => {

  dbImport.getOneObject(5, (data) => console.log(data.data[0]));

  return (
    <div>
      <PhotoContainer />
    </div>
  )
}
export default App;