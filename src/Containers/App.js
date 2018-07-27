import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';

import Toolbar from '../Components/Toolbar/Toolbar';
import BackgroundImage from '../Components/BackgroundImage/BackgroundImage';
import CenterBox from '../Components/CenterBox/CenterBox';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <BackgroundImage city="Albuquerque">
          <CenterBox>
            <h1>Nathan Dennis</h1>
            <hr />
            <h2>Web Developer</h2>
          </CenterBox>
        </BackgroundImage>
        <BackgroundImage>

        </BackgroundImage>
      </React.Fragment>
  );
  }
}

export default App;
