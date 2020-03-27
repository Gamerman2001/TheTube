import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "./VideoMetadata.scss";
import { Rating } from "../Rating/Rating";

export function VideoMetadata(props) {
  const viewCount = Number(props.viewCount).toLocaleString() || "";
  /* Todo */
  return (
    <div className="video-metadata" style={props.style}>
      <h3>video title</h3>
      <div className="video-stats">
        <span>{viewCount} views </span>
        <div className="video-actions">
          <Rating likeCount={300} dislikeCount={40} />
          <Button basic icon labelPosition="left">
            <Icon name="share" />
          </Button>
          <Button basic icon>
            <Icon name="add circle" />
          </Button>
          <Button basic icon>
            <Icon name="ellipsis horizontal" />
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
