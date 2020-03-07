import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import {HeaderNav} from './containers/HeaderNav/HeaderNav'
import {SideBar} from './containers/SideBar/SideBar'
import {App} from './App';

test('Renders App component', () => {
  const wrapper = shallow(
    <App />
  )
  // console.log(wrapper)
  expect(wrapper).toMatchSnapshot();
});
