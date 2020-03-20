import React, { Component } from 'react'
import {VideoPreview} from '../../components/VideoPreview/VideoPreview'
import './Home.scss'

export class Home extends Component {
  render() {
    return (
      <div class='home'>
        <VideoPreview />
      </div>
    )
  }
}
