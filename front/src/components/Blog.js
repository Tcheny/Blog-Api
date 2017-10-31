import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal : false,
    };
  }

  handleOpen = (index) => {
    this.setState({showModal: true,
      singleArticle : this.props.article[index]
    });
  };

  handleClose = () => {
    this.setState({showModal: false});
  };
  render() {
    return (
      <div className="container">
        <div className="columns">
          {this.props.article.map((article, index) => {
            return (
              <div className="column col-4">
                <div className="card">
                  <div className="card-header">
                    <ul className="card-title h5">
                      <li key={index}><a onClick={() => this.handleOpen(index)}>{article.title}</a></li>
                      <Dialog
                        modal={false}
                        open={this.state.showModal}
                        onRequestClose={this.handleClose}
                        autoScrollBodyContent={true}
                      >
                        <div>
                          {this.state.singleArticle &&
                            <div>
                              <h2>{this.state.singleArticle.title}</h2>
                              <p>{this.state.singleArticle.article}</p>
                              By {this.state.singleArticle.author}, <br/>
                              {this.state.singleArticle.date}
                            </div>
                          }
                        </div>
                      </Dialog>
                    </ul>
                    <div className="card-subtitle text-gray">
                      By {article.author}, <br/>
                      {article.date}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

}

export default Blog;
