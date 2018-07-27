import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';

import Toolbar from './Toolbar/Toolbar';
import BackgroundImage from './BackgroundImage/BackgroundImage';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <BackgroundImage>
          
        </BackgroundImage>
      </React.Fragment>
  );
  }
}

export default App;
