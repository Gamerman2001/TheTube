import React from 'react'
import './RelatedVideos.scss'
import {VideoPreview} from '../VideoPreview/VideoPreview'

export function RelatedVideos(props) {
  return (
    <div className='related-videos'>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
    </div>
  )
}

