import React, { Component } from "react";
import Dialog from "material-ui/Dialog";

import Form from "./Form";
import Comment from "./Comment";

const customWitdhModal = {
  width: "90%",
  maxWidth: "none"
};

class AllArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      thisArticle: ""
    };
  }

  handleOpen = index => {
    this.setState(
      {
        showModal: true,
        thisArticle: this.props.articles[index]
      },
      () => this.state.thisArticle
    );
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="container">
        <div className="columns">
          {this.props.articles.map((article, index) => {
            return (
              <div className="column col-4">
                <div className="card">
                  <div className="card-header">
                    <a href={`http://localhost:8080/app/blog/delete/${article._id}`}
                      className="btn btn-clear float-right"
                    />
                    <ul className="card-title h5">
                      <li key={index}>
                        <a onClick={() => this.handleOpen(index)}>
                          {article.title}
                        </a>
                      </li>
                      <Dialog
                        modal={false}
                        contentStyle={customWitdhModal}
                        open={this.state.showModal}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                      >
                        <div className="container">
                          {this.state.thisArticle && (
                            <div className="container-modal">
                              <div className="title-modal">
                                <h3>{this.state.thisArticle.title}</h3>
                              </div>
                              <div className="body-modal">
                                <div className="content">
                                  {this.state.thisArticle.article}
                                </div>
                              </div>
                              <div className="footer-modal">
                                By {this.state.thisArticle.author}, <br />
                                {this.state.thisArticle.date}
                              </div>

                              <Comment thisComment={this.state.thisArticle} />

                              <Form isClose={this.handleClose}
                                isInput={this.state.thisArticle}
                                action={`http://localhost:8080/app/blog/${this.state.thisArticle._id}/comment/add`}
                                method="POST"
                                author="author"
                                textarea="comment"
                                labelAuthor="Name"
                                placeholderAuthor="Name"
                                label="Response"
                                placeholder="Your response..."
                              />
                            </div>
                          )}
                        </div>
                      </Dialog>
                    </ul>
                    <div className="card-subtitle text-gray">
                      By {article.author}, <br />
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllArticles;
