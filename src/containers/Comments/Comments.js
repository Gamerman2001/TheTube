import React, { Component } from "react";
import { CommentsHeader } from "./CommentsHeader/CommentsHeader";
import { Comment } from "./Comment/Comment";
import { AddComments } from "./AddComments/AddComments";

export class Comments extends Component {
  render() {
    return (
      <div>
        <CommentsHeader amountComments={542} />
        <AddComments />
        <Comment />
        <Comment />
      </div>
    );
  }
}
