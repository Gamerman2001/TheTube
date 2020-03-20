import React from "react";
import "./Video.scss";

export function Video(props) {
  const BASE_EMBED_URL = "https://www.youtube.com/embed/";

  if (!props.id) {
    return null;
  }

  const embedUrl = `${BASE_EMBED_URL}${props.id}`;
  return (
    <>
      <div className="video-container">
        <div className="video">
          <iframe
            className='video-player'
            title="video"
            src={embedUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
