import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';

import Toolbar from '../Components/Toolbar/Toolbar';
import BackgroundImage from '../Components/BackgroundImage/BackgroundImage';
import CenterBox from '../Components/CenterBox/CenterBox';
import Projects from '../Components/Projects/Projects';
import TitleRow from '../Components/TitleRow/TitleRow';

class App extends Component {


  render() {

    const projectsList = [
      {
        title: 'BeerLeagueMe',
        description: 'This is an ongoing project to create a network of local sports events. The front end is built in AngularJS, and accesses a separately deployed Node.js server with a PostgreSQL database.',
        githubUrl: 'https://github.com/nathanejbrown/beerleagueme',
        deployedUrl: 'https://nathanejbrown.github.io/beerleagueme'
      },
      {
        title: 'Listen',
        description: 'Listen was my Capstone project at Galvanize. Its intent is to connect survivors of sexual assault with counselors. It’s primarily written in AngularJS with an Express, Node.js, and PostgreSQL back end.',
        githubUrl: 'https://github.com/nathanejbrown/capstone-front-end',
        deployedUrl: 'https://nathanejbrown.github.io/capstone-front-end/#/'
      },
      {
        title: 'Tribbianify',
        description: 'This was a project I did for fun that’s based on an episode of Friends where Joey uses a thesaurus on every word in a letter he’s writing to make it sound more intelligent. It heavily utilizes AJAX technology and was build with HTML, CSS, JavaScript, and jQuery.',
        githubUrl: 'https://github.com/nathanejbrown/q1Project',
        deployedUrl: 'https://nathanejbrown.github.io/q1Project'
      }
    ]

    return (
      <React.Fragment>
        <Toolbar />
        <BackgroundImage background="Albuquerque">
          <CenterBox>
            <h1>Nathan Dennis</h1>
            <hr />
            <h2>Web Developer</h2>
          </CenterBox>
        </BackgroundImage>
        <TitleRow>
          <h1>Projects</h1>
        </TitleRow>
        <BackgroundImage background="Winnipeg">
          <Projects projectsList={projectsList} />
        </BackgroundImage>
        <TitleRow>
          <h1>Skills</h1>
        </TitleRow>
        <BackgroundImage background="Boston">

        </BackgroundImage>
      </React.Fragment>
  );
  }
}

export default App;
