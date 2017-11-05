import React, { Component } from 'react';

class Comment extends Component {
  state = {
    allComments : this.props.thisComment.comment
};

  render() {
    return (
        <details class="accordion form-comment">
          <summary className="accordion-header">
            {this.state.allComments.length === 0 ? "Be the first to write a response..." : <i className="icon icon-arrow-right mr-1"><h5>Read comments</h5></i>}
          </summary>
          <div className="accordion-body">
            { this.state.allComments.map((comment, index) => {
              return (
                <div className="Comment">
                  <a href={`http://localhost:8080/app/blog/${this.props.thisComment._id}/comment/${comment._id}/delete/`}
                    className="btn btn-clear float-right"
                  />
                  <p>By {comment.autor}
                    <span className="float-right">{comment.date}</span>
                  </p>
                  <p>{comment.comment}</p>
                </div>
              )
            })}
          </div>
        </details>

    );
  }

}

export default Comment;
