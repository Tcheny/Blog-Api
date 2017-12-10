import React, { Component } from 'react';
// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import request from 'request';

import '../stylesheets/App.css';
import 'spectre.css/dist/spectre.min.css';

import config from '../config';
import NewArticle from './NewArticle.js';
import AllArticles from './AllArticles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles : []
    };
  }

  // Request vers notre api
  // récupérer et stocker les données
  componentDidMount() {
    request(config.url, (err, res, body)=> {
      if(err) return res.send(err);
      console.log(body);
      this.setState({
        allArticles : JSON.parse(body)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Welcome to my little Blog</h1>
          <p className="App-p">Bonjour moi, c'est Eugénie aka Tcheny pour les intimes. Je vous invite à lire ces petits articles, et n'hésitez pas à en rajouter!! Peace </p>
        </div>
        <MuiThemeProvider>

          <NewArticle/>

          <AllArticles articles={this.state.allArticles}/>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
