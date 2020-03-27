import React from 'react'
import {shallow} from 'enzyme'
import {VideoMetadata} from '../VideoMetadata'

test('Renders VideoMetadata', ()=>{
  const wrapper = shallow(
    <VideoMetadata />
  );
  expect(wrapper).toMatchSnapshot()
})
test('Renders VideoMetadata with viewCount', ()=>{
  const wrapper = shallow(
    <VideoMetadata viewCount={10004}/>
  );
  expect(wrapper).toMatchSnapshot()
})