import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

import Form from "./Form";

const customWitdhModal = {
  width: "70%",
  maxWidth: "none"
};

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  handleOpen = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="Article">
        <RaisedButton
          className="btn-custom"
          label="New Article"
          primary={true}
          onClick={this.handleOpen}
        />
        <Dialog
          title="Add New Article"
          modal={false}
          contentStyle={customWitdhModal}
          open={this.state.showModal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <Form
            isClose={this.handleClose}
            action="http://localhost:8080/app/blog/add"
            method="POST"
            title="title"
            author="author"
            textarea="article"
            labelAuthor="Author"
            placeholderAuthor="Author"
            label="Article"
            placeholder="Let's write your Article..."
          />
        </Dialog>
      </div>
    );
  }
}

export default NewArticle;
