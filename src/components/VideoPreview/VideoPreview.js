import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.scss";

export class VideoPreview extends Component {
  render() {
    const horizontal = this.props.horizontal ? 'horizontal': null;
    return (
      <div className={['video-preview', horizontal].join(' ')}>
        <div className="image-container">
          <Image src="http://via.placeholder.com/210x118" />
          <div className="time-label">
            <span> 5: 22</span>
          </div>
        </div>

        <div className="video-info">
            <div className="semi-bold show-max-two-lines">Video Title Even</div>
            <div className="video-preview-metadata-container">
              <div className="channel-title">channel title</div>
              <div><span>2.1M views 2Days Ago</span></div>
            </div>
          </div>
      </div>
    );
  }
}
