import React, { Component } from "react";
// Material-ui
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";

import Form from "./Form";

const customWitdhModal = {
  width: "70%",
  maxWidth: "none"
};
const style = {
  margin: 32,
  height: 45,
  width: 300,
};

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  // Gestion du Dialog
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
          label="New Article"
          onClick={this.handleOpen}
          secondary={true}
          style={style}
        />
        <Dialog
          title="Add New Article"
          titleStyle={{textAlign: 'center', fontSize: '2em'}}
          modal={false}
          contentStyle={customWitdhModal}
          open={this.state.showModal}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <Form
            isClose={this.handleClose}
            action="http://localhost:8080/app/blog/add"
            encType="multipart/form-data"
            method="POST"
            title="title"
            author="author"
            textarea="article"
            labelAuthor="Author"
            placeholderAuthor="Who are you ?"
            label="Article"
            image="Add picture"
            placeholder="Let's write your Article..."
          />
        </Dialog>
      </div>
    );
  }
}

export default NewArticle;
