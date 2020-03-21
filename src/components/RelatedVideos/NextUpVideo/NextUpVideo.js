import React from 'react'
import './NextUpVideo.scss'
import {Checkbox, Divider} from "semantic-ui-react";
import {VideoPreview} from '../../VideoPreview/VideoPreview'

export function NextUpVideo(props) {
  return (
    <>
      <div className="next-up-container">
        <h4>up next</h4>
        <div className="up-next-toggle">
          <span>Autoplay</span>
          <Checkbox defaultChecked toggle />
        </div>
      </div>
      <VideoPreview horizontal={true}/>
      <Divider/>
    </>
  )
}
