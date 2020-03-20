import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.scss";

export class VideoPreview extends Component {
  render() {
    return (
      <div className="video-preview">
        <div className="image-container">
          <Image src="http://via.placeholder.com/210x118" />
          <div className="video-info">
            <div className="semi-bold show-max-two-lines">Video Title Even</div>
            <div className="video-preview-metadata-container">
              <div className="channel-title">channel title</div>
              <div><span>2.1M views 2Days Ago</span></div>
            </div>
          </div>
          <div className="time-label">
            <span> 5: 22</span>
          </div>
        </div>
      </div>
    );
  }
}
