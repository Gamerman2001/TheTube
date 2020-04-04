import React, { Component } from "react";
import "./Watch.scss";
import { Video } from "../Video/Video";
import { Comments } from "../../containers/Comments/Comments";
// import {VideoPreview} from '../VideoPreview/VideoPreview'
import { RelatedVideos } from "../RelatedVideos/RelatedVideos";
// import {NextUpVideo} from '../RelatedVideos/NextUpVideo/NextUpVideo'
import { VideoMetadata } from "../VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../VideoInfoBox/VideoInfoBox";

export class Watch extends Component {
  render() {
    return (
      <div className="watch-grid">
        {/* <Video id='-7fuHEEmEjs'/>
        <VideoPreview horizontal={true}/> */}
        {/* <NextUpVideo /> */}
        <Video className="video" id="-7fuHEEmEjs" />
        <VideoMetadata className="moovee" viewCount={1000} />
        <VideoInfoBox className="video-info-box" />
        <Comments />
        <RelatedVideos className="relatedVideos" />
      </div>
    );
  }
}
