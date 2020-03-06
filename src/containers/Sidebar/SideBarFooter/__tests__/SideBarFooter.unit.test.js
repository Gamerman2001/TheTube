import React from 'react'
import {shallow} from 'enzyme'
import SideBarFooter from '../SideBarFooter'
import {Menu} from 'semantic-ui-react'

test('should render SidebarFooter', ()=> {
  const wrapper = shallow(
<Menu>
  <SideBarFooter />
</Menu>
      
    
  )
  expect(wrapper).toMatchSnapshot()
})