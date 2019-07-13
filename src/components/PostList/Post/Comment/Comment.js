import React, { Component } from "react";
import "./Comment.css";

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img className="avatar" src={this.props.data.author.avatar} alt="" />
        <div className="text">
          <span className="author-name">{this.props.data.author.name}</span>
          {this.props.data.content}
        </div>
      </div>
    );
  }
}
