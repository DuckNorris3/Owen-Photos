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
import PhotoCarouselModal from './PhotoCarouselModal.jsx';

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

const setModalOnSpy = jest.fn();
const setModalOn = setModalOnSpy;
const setCurrentPicIndexSpy = jest.fn();
const setCurrentPicIndex = setCurrentPicIndexSpy;

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

describe('<PhotoCarouselModal />', () => {
  let component;

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'portal');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  const closeSpy = jest.fn();
  const close = closeSpy;

  const incrementHelpfulSpy = jest.fn();
  const incrementHelpful = incrementHelpfulSpy;

  component = mount(<PhotoCarouselModal
    on={true}
    siteData={mockData}
    setModalOn={setModalOn}
    setCurrentPicIndex={setCurrentPicIndex}
    currentPicIndex={1}
    incrementHelpful={incrementHelpful}
    close={close}
  />);

  const modal = component.find('#modalstyle');
  const overlay = component.find('#overlaystyle');
  const leftButton = component.findWhere(n => n.type() === 'button' && n.contains('<'));
  const rightButton = component.findWhere(n => n.type() === 'button' && n.contains('>'));
  const xButton = component.find(XButton);
  const navButton = component.find(NavButton);
  const helpfulButton = component.find(HelpfulButton);

  it('should render the modal and the overlay', () => {
    expect(modal).toBeTruthy();
    expect(overlay).toBeTruthy();
  });

  it('should render all the appropriate styled components', () =>  {
    expect(component.find(ParentContainer)).toBeTruthy();
    expect(component.find(VerticalContainerLeft)).toBeTruthy();
    expect(component.find(PhotoNumber)).toBeTruthy();
    expect(leftButton).toBeTruthy();
    expect(component.find(rightButton)).toBeTruthy();
    expect(component.find(PhotoAndCaptionContainer)).toBeTruthy();
    expect(component.find(InfoContainer)).toBeTruthy();
    expect(component.find(InfoSubcontainerLeft)).toBeTruthy();
    expect(component.find(UserInfoContainer)).toBeTruthy();
    expect(component.find(UserImage)).toBeTruthy();
    expect(component.find(UserNameDateMiniContainer)).toBeTruthy();
    expect(component.find(UserName)).toBeTruthy();
    expect(component.find(PostedOn)).toBeTruthy();
    expect(component.find(LocationInfoContainer)).toBeTruthy();
    expect(component.find(LocationMarkerImage)).toBeTruthy();
    expect(component.find(LocationText)).toBeTruthy();
    expect(helpfulButton).toBeTruthy();
    expect(component.find(PhotoHolder)).toBeTruthy();
    expect(component.find(LocationText)).toBeTruthy();
    expect(component.find(VerticalContainerRight)).toBeTruthy();
    expect(xButton).toBeTruthy();
  });

  it('should close when the X button has been clicked', () => {
    expect(closeSpy).not.toHaveBeenCalled();
    xButton.simulate('click');
    expect(closeSpy).toHaveBeenCalled();
  });

  it('should call setCurrentPicIndex when the left button has been clicked', () => {
    expect(setCurrentPicIndexSpy).toHaveBeenCalledTimes(1);
    leftButton.simulate('click');
    expect(setCurrentPicIndexSpy).toHaveBeenCalledTimes(2);
    expect(setCurrentPicIndexSpy).toHaveBeenCalledWith(0);
  });

  it('should call setCurrentPicIndex when the right button has been clicked', () => {
    expect(setCurrentPicIndexSpy).toHaveBeenCalledTimes(2);
    rightButton.simulate('click');
    expect(setCurrentPicIndexSpy).toHaveBeenCalledTimes(3);
    expect(setCurrentPicIndexSpy).toHaveBeenCalledWith(2);
  });

  it('should call incrementHelpful when the Helpful button has been clicked', () => {
    expect(incrementHelpfulSpy).not.toHaveBeenCalled();
    helpfulButton.simulate('click');
    expect(incrementHelpfulSpy).toHaveBeenCalled();
  });

  component.unmount();
});
