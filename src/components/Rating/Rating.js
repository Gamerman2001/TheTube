import React from "react";
import PropTypes from "prop-types";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";

export function Rating({ likeCount, dislikeCount }) {
  let progress = null;

  if (likeCount && dislikeCount) {
    const percent = 100 * (likeCount / likeCount + dislikeCount);
    progress = <Progress className="progress" percent={percent} size="tiny" />;
  }
  return (
    <div className="rating">
      <div className="thumb-up">
        <Icon name="thumbs outline up" /> <span>{likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs outline down" /> <span>{dislikeCount}</span>
      </div>
      {progress}
    </div>
  );
}

// Rating.propTypes = {

// }
