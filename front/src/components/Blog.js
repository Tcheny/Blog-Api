import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          {this.props.article.map(article => {
            return (
              <div className="column col-4">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title h5">{article.title}
                    </div>
                    <div className="card-body">
                      <p>{article.article}</p>
                    </div>
                    <div className="card-subtitle text-gray">
                      Posté par {article.author} <br/>
                      le {article.date}
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
