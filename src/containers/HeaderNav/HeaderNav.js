import React, { Component } from "react";
import { Image, Menu } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/TheTube.png";

export default class HeaderNav extends Component {
  render() {
    return (
      <div>
        <Menu borderless className="top-menu" fixed="top">
          <Menu.item header className="logo">
            <image src={logo} size="tiny" />
          </Menu.item>
          <Menu.menu>

          </Menu.menu>
        </Menu>
      </div>
    );
  }
}
