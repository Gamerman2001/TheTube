import React, { Component } from 'react'
import './SideBar.scss'
import SideBarItem from './SideBarItem/SideBarItem'
import {Menu} from 'semantic-ui-react'

export default class SideBar extends Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
      </Menu>
    )
  }
}
