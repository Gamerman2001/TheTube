import React, { Component } from "react";
import { VideoGrid } from "../../components/VideoGrid/VideoGrid";
// import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import "./Home.scss";
import { SideBar } from "../SideBar/SideBar";

export class Home extends Component {
  render() {
    return (
      <>
        
          <SideBar />
          <div className="home">
          <div className="responsive-video-grid-container">
            <VideoGrid title="Trending" />
            <VideoGrid title="Autos & Vehicles" hideDivider={true} />
          </div>
        </div>
      </>
    );
  }
}
