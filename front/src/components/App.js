import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import request from 'request';

import '../stylesheets/App.css';
import 'spectre.css/dist/spectre.min.css';

import config from '../config';
import Article from './Article.js';
import Blog from './Blog.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles : []
    };
  }

  componentDidMount() {
    request(config.url, (err, res, body)=> {
      if(err);
      this.setState({
        allArticles : JSON.parse(body)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <header className="App-header">
            <h1 className="App-title">Welcome to My Blog</h1>
          </header>
          <Article/>

          <Blog article={this.state.allArticles}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
