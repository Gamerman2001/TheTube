import React from 'react'
import {Icon,Menu} from 'semantic-ui-react'
import './SideBarItem.scss'

export default function SideBarItem(props) {
  const highlight = props.highlight ? 'highlight-item' : null;
  return (
    <Menu.item className={['sidebar-item', highlight].join('')}>
      <div className='sidebar-item-alignment-container'>

      </div>
    </Menu.item>
  )
}
