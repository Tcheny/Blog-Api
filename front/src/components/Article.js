import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Article extends Component {

  render() {
    const style = {
      margin: 12,
    };
    return (
      <div className="Article">
        <RaisedButton className="btn-custom" label="New Article" primary={true} onClick={this.props.isOpen}/>
        <Dialog
          title="Add New Article"
          modal={false}
          open={this.props.showModal}
          onRequestClose={this.props.isClose}
        >
          <form action="http://localhost:8080/app/blog/add" method="POST">
            <div className="form-group">
              <label className="form-label">Title</label>
              <input className="form-input" name="title" placeholder="Title"/>
              <label className="form-label">Author</label>
              <input className="form-input" name="author" placeholder="Author"/>
              <label className="form-label">Article</label>
              <textarea className="form-input" name="article" placeholder="Your article" rows="3"></textarea>
            </div>
            <RaisedButton className="btn-custom" label="Cancel" onClick={this.props.isClose} style={style} />
            <RaisedButton className="btn-custom" label="Submit" type="submit" primary={true} style={style} />
          </form>
        </Dialog>
      </div>
    );
  }

}

export default Article;
