import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "./VideoMetadata.scss";

export function VideoMetadata(props) {
  const viewCount = Number(props.viewCount).toLocaleString() || "";
  /* Todo */
  return (
    <div className="video-metadata" style={props.style}>
      <h3>video title</h3>
      <div className="video-stats">
        <span>{viewCount} views </span>
        <div>
          {/* {TOdo} */}
          this should be on right
        </div>
      </div>
      <Divider />
    </div>
  );
}
