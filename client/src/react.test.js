/**
 * @jest-environment jsdom
 */

import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
// import App from ('./components/App.jsx');

configure({ adapter: new Adapter() });

describe('sanity check', () => {
  it('should test that true equals true', () => {
    expect(true).toBe(true);
  });
});

// describe('<App />', () => {
//   it('should render a PhotoContainer component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.contains(<PhotoContainer />)).toBe(true);
//   });
// });