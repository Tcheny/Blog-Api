import React, { Component } from "react";
// Material-ui
import Dialog from "material-ui/Dialog";
import RaisedButton from 'material-ui/RaisedButton';

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
      anArticle: ""
    };
  }

  // À l'ouverture du 'Dialog'
  // récupère l'article ciblé grâce à son index
  handleOpen = index => {
    this.setState(
      {
        showModal: true,
        anArticle: this.props.articles[index]
      },
      () => this.state.anArticle
    );
  };

  // Ferme le 'Dialog'
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
                      className=" float-right"
                    >
                      <span className="btn btn-tooltip tooltip tooltip-left" data-tooltip="remove">x</span>
                    </a>
                    <ul>
                      <li key={index}>
                        <a className="card-a" onClick={() => this.handleOpen(index)}>
                          <h5 className="card-title">{article.title}</h5>
                        </a>
                        <p className="card-article">{article.article}</p>
                      </li>
                      <Dialog
                        title={this.state.anArticle.title}
                        titleStyle={{textAlign: 'center', fontSize: '2em'}}
                        modal={false}
                        contentStyle={customWitdhModal}
                        open={this.state.showModal}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                        overlayStyle={{
                          backgroundColor: 'rgba(0, 0, 0, 0.14)'
                        }}
                      >
                        <div className="container">
                          {this.state.anArticle && (
                            <div className="container-modal">
                              {this.state.anArticle.image &&
                                <div className="imageArticle">
                                  <img src={`my_uploads/${this.state.anArticle.image}`} alt="article"/>
                                </div>
                              }
                              <div className="body-modal">
                                <div className="content">
                                  {this.state.anArticle.article}
                                </div>
                              </div>
                              <div className="footer-modal">
                                By {this.state.anArticle.author},
                                <br />
                                {this.state.anArticle.date}
                              </div>

                              <Comment aComment={this.state.anArticle} />

                              <Form isClose={this.handleClose}
                                isInput={this.state.anArticle}
                                action={`http://localhost:8080/app/blog/${this.state.anArticle._id}/comment/add`}
                                method="POST"
                                encType="application/x-www-form-urlencoded"
                                author="author"
                                textarea="comment"
                                labelAuthor="Who are you ?"
                                placeholderAuthor="Enter your name"
                                label="Response"
                                placeholder="Your response..."
                              />
                            </div>
                          )}
                        </div>
                      </Dialog>
                    </ul>
                  </div>
                  <div className="card-subtitle text-gray">
                    By {article.author}, <br />
                    {article.date}
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
