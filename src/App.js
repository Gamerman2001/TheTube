import React, { Component } from "react";
import "./App.scss";
// import {HeaderNav} from './containers/HeaderNav/HeaderNav'
// import {SideBar} from './containers/SideBar/SideBar'
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Home } from "./containers/Home/Home";
import { Route, Switch } from "react-router-dom";
import { Watch } from "../src/components/Watch/Watch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { youtubeLibraryLoaded } from "./store/actions/api";

const API_KEY = process.env.REACT_APP_YOUTUBE_API || "";
console.log(process.env.REACT_APP_YOUTUBE_API);
class App extends Component {
  componentDidMount() {
    this.loadYoutubeApi();
  }
  render() {
    return (
      <div>
        <AppLayout>
          <Switch>
            <Route path="/watch" component={Watch} />
            <Route path="/" component={Home} />
          </Switch>
        </AppLayout>
      </div>
    );
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onLoad = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
