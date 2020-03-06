import React from 'react'
import {shallow} from 'enzyme'
import SideBarHeader from '../SideBarHeader'
import {Menu} from 'semantic-ui-react'

test('should render SidebarHeader', ()=> {
  const wrapper = shallow(
    <Menu>
       <SideBarHeader />
    </Menu>
   
  )
  expect(wrapper).toMatchSnapshot()
})