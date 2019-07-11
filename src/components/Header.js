import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="content">
          <a href="" id="logo">
            RocketSocial
            <span className="copyright">©</span>
          </a>
          <a href="">Meu perfil</a>
        </div>
      </header>
    );
  }
}
