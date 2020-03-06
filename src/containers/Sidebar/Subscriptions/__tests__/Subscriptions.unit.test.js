import React from 'react'
import {shallow} from 'enzyme'
import Subscriptions from '../Subscriptions'
import {Menu} from 'semantic-ui-react'

test('should render Subscriptions', ()=> {
  const wrapper = shallow(
    <Menu>
      <Subscriptions />
    </Menu>
    
  )
  expect(wrapper).toMatchSnapshot()
})