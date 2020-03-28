import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { Image, Button } from "semantic-ui-react";
import "./VideoInfoBox.scss";

export class VideoInfoBox extends Component {
  state = {
    collapsed: true
  };

  onToggleCollapseButtonClick = () => {
    this.setState(prevState => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  };
  render() {
    let descriptionTextClass = "collapsed";
    let buttonTitle = "Show More";
    if(!this.state.collapsed) {
      descriptionTextClass = 'expanded'
      buttonTitle = 'Show Less'
    }
    return (
      <div className="video-info-box">
        <Image
          className="channel-image"
          src="http://via.placeholder.com/48x48"
          circular
        />
        <div className="video-info">
          <div className="channel-name">channel name</div>
          <div className="video-publication-date"> 04 10 1999</div>
        </div>
        <Button color="youtube">91.5k to subscribe</Button>
        <div className="video-description"
        >
          <div className={descriptionTextClass}>
          <p>paragraph 1</p>
          <p>paragraph 2</p>
          <p>paragraph 3</p>
          <p>paragraph 4</p>
          <p>paragraph 5</p>
          </div>
          
          <Button
            compact
            onClick={() => {
              this.onToggleCollapseButtonClick();
            }}
          >
            {buttonTitle}
          </Button>
        </div>
      </div>
    );
  }
}

console.log(this, "inside video info box");
