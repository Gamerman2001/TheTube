import React from 'react'
import {shallow} from 'enzyme'
import {Rating} from '../Rating'

test('Renders Rating', ()=>{
  const wrapper = shallow(
    <Rating />
  );
  expect(wrapper).toMatchSnapshot()
})