import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/TheTube.png";

export default class HeaderNav extends Component {


  render() {
    return (
      <div>
        <Menu borderless className="top-menu" fixed="top">
          <Menu.Item header className="logo">
            <Image src={logo} size="tiny" />
          </Menu.Item>
          <Menu.Menu className="nav-container">
            {/* {Todo} */}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}


