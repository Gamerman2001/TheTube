import React, { Component } from 'react'
import './Watch.scss'
import {Video} from '../Video/Video'
import {VideoPreview} from '../VideoPreview/VideoPreview'

export class Watch extends Component {
  render() {
    return (
      <div style={{maxWidth: "80%"}} className='CHECKTHISS!!!'>
        <Video id='-7fuHEEmEjs'/>
        <VideoPreview horizontal={true}/>
      </div>
    )
  }
}
