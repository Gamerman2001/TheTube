import React from 'react'
import {shallow} from 'enzyme'
import SideBarItem from '../SideBarItem'
import {Menu,} from 'semantic-ui-react'

test('should render Sidebar', ()=> {
  const wrapper = shallow(
    <Menu>
       <SideBarItem />
    </Menu>
   
  )
  expect(wrapper).toMatchSnapshot()
})