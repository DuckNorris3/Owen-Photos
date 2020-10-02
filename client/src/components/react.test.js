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

const mockData =  {
  _id: '5f764129e3d6781535728dd9',
  pictures: [
      {
          picUrl: 'https://obwfec-tenthop.s3.amazonaws.com/IMG50.jpg',
          helpful: 6,
          caption: 'Excepturi eos vel ab aut aut quasi numquam et ab.'
      },
      {
          picUrl: 'https://obwfec-tenthop.s3.amazonaws.com/IMG30.jpg',
          helpful: 3,
          caption: 'Dolorem similique non laborum magnam dolore incidunt qui.'
      },
      {
          picUrl: 'https://obwfec-tenthop.s3.amazonaws.com/IMG29.jpg',
          helpful: 2,
          caption: 'Corrupti vero libero saepe nisi quis.'
      }
  ],
  siteID: 12,
  userName: 'Noel W.',
  userPic: 'https://obwfec-tenthop.s3.amazonaws.com/ICON29.jpg',
  postedOn: 'Thu Sep 24 2020 01:02:52 GMT-0400 (Eastern Daylight Time)',
  location: 'Striking spectacular cottage in Connecticut',
  __v: 0
}

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

describe('<PhotoContainerEntry />', () => {
  const setModalOnSpy = jest.fn();
  const setModalOn = setModalOnSpy;
  const setCurrentPicIndexSpy = jest.fn();
  const setCurrentPicIndex = setCurrentPicIndexSpy;

  const wrapper = shallow(<PhotoContainerEntry
    siteData={mockData}
    setModalOn={setModalOn}
    setCurrentPicIndex={setCurrentPicIndex}
    picIndex={1}/>);
  const image = wrapper.find(PhotoModImageStyle);

  it('should render an image with the PhotoModImageStyle component', () => {
    expect(image).toBeTruthy();
  });

  it('should call the two functions on click of image', () => {
    expect(setModalOnSpy).not.toHaveBeenCalled();
    expect(setCurrentPicIndexSpy).not.toHaveBeenCalled();
    image.simulate('click');
    expect(setModalOnSpy).toHaveBeenCalledWith(true);
    expect(setCurrentPicIndexSpy).toHaveBeenCalledWith(1);
  });

});