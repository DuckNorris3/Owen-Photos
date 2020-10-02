/**
 * @jest-environment jsdom
 */

import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';

import styled from 'styled-components';
import moment from 'moment';

import App from './App.jsx';
import PhotoContainer from './PhotoContainer.jsx';
import PhotoContainerEntry from './PhotoContainerEntry.jsx';

import {
  PhotoModContainerStyle,
  PhotoModImageStyle
} from './styledComponents/PhotoModStyledComponents.jsx';

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

configure({ adapter: new Adapter() });

describe('sanity check', () => {
  it('should test that true equals true', () => {
    expect(true).toBe(true);
  });
});

describe('<App />', () => {
  it('should render a PhotoContainer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('PhotoContainer')).toBeTruthy();
  });
});

describe('<PhotoContainer />', () => {
  it('should render three PhotoContainerEntry components', () => {
    const wrapper = shallow(<PhotoContainer />);
    expect(wrapper.find(PhotoContainerEntry)).toBeTruthy();
    expect(wrapper.find(PhotoContainerEntry)).toHaveLength(3);
  });
});

// describe('<PhotoContainerEntry />', () => {
//   it('should render an image with the PhotoModImageStyle component ', () => {
//     const wrapper = shallow(<PhotoContainerEntry siteData={mockSiteData}/>);
//     expect(wrapper.find(PhotoModImageStyle)).toBeTruthy();
//   });
// });