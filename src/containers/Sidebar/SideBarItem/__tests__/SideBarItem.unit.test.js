import React from 'react'
import {shallow} from 'enzyme'
import {SideBarItem} from '../SideBarItem'
import {Menu,} from 'semantic-ui-react'

describe('SideBarItem', ()=> {
  test('should render Sidebar', ()=> {
    const wrapper = shallow(
         <SideBarItem/>   
    )
    expect(wrapper).toMatchSnapshot()
  })
  
  test('renders highlighted sideitem', ()=> {
    const wrapper = shallow(
      <SideBarItem highlight={true} icon='fire' label='trending' />
    )
    expect(wrapper).toMatchSnapshot()
  }) 
  
  test('render Non Highlighted bar', ()=> {
    const wrapper = shallow(
      <SideBarItem icon='fire' label='trending'/>
    )
    expect(wrapper).toMatchSnapshot()
  
    // expect(warpper)
  })
})
