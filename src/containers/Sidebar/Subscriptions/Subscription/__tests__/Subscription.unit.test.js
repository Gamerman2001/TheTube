import React from 'react'
import {shallow} from 'enzyme'
import Subscription from '../Subscription'
import {Menu} from 'semantic-ui-react'

test('should render Subscription', ()=> {
  const wrapper = shallow(
    <Menu>
      <Subscription />
    </Menu>
    
  )
  expect(wrapper).toMatchSnapshot()
})