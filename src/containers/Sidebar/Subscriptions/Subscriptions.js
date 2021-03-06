import React, { Component } from 'react'
import {Subscription} from './Subscription/Subscription'
import {Divider} from 'semantic-ui-react'
import {SideBarHeader} from '../SideBarHeader/SideBarHeader'

export class Subscriptions extends Component {
  render() {
    return (
      <>
      <SideBarHeader title='subscriptons'/>
      <Subscription label='MusicChannel' broadcasting />
      <Subscription label='Courseara' amountNewVideos={10} />
      <Subscription label='TEDx Talks' amountNewVideos={23} />
      <Subscription label='Stanford iOS' amountNewVideos={4} />
      <Subscription label='Udacity' amountNewVideos={112} />
      <Divider />
      </>
    )
  }
}
