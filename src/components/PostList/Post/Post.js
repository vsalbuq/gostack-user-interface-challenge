import React, { Component } from "react";
import "./Post.css";
import Comment from "./Comment/Comment";

export default class Post extends Component {
  render() {
    return (
      <>
        <div className="post content">
          <div className="user">
            <img
              className="avatar"
              src={this.props.data.author.avatar}
              alt=""
            />
            <div>
              <h3>{this.props.data.author.name}</h3>
              <p className="date">{this.props.data.date}</p>
            </div>
          </div>
          <p>{this.props.data.content}</p>
          <hr />
          {this.props.data.comments.map(comment => (
            <Comment key={comment.id} data={comment} />
          ))}
        </div>
      </>
    );
  }
}
