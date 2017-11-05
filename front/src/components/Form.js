import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {

  handleClose = () => {
    this.setState({showModal: false});
  };
  render() {
    const style = {
      margin: 12,
    };
    return (
      <div>
        <form action={this.props.action} method={this.props.method}>
          <div className="form-group">
            {this.props.title &&
              (<label className="form-label">Title
                <input className="form-input" name={this.props.title} placeholder="Title"/>
              </label>)}
            <label className="form-label">{this.props.labelAuthor}
              <input className="form-input" name={this.props.author} placeholder={this.props.placeholderAuthor}/>
            </label>
            <label className="form-label">{this.props.label}
              <textarea className="form-input" name={this.props.textarea} placeholder={this.props.placeholder} rows="3"></textarea>
            </label>
          </div>
          <RaisedButton className="btn-custom" label="Cancel" onClick={this.props.isClose} style={style} />
          <RaisedButton className="btn-custom" label="Submit" type="submit" primary={true} style={style} />
        </form>
      </div>
    );
  }
}

export default Form;
