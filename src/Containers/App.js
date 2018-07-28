import React, { Component } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';

import Toolbar from '../Components/Toolbar/Toolbar';
import BackgroundImage from '../Components/BackgroundImage/BackgroundImage';
import CenterBox from '../Components/CenterBox/CenterBox';
import Projects from '../Components/Projects/Projects';
import TitleRow from '../Components/TitleRow/TitleRow';
import Skills from '../Components/Skills/Skills';
import Modal from '../Components/UI/Modal/Modal';
import Form from '../Components/UI/Form/Form';

class App extends Component {

  state = {
    projectsList: [
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
    ],
    skillsList: [
      {
        skillType: 'Languages',
        skillsArray: ['HTML', 'CSS', 'JavaScript']
      },
      {
        skillType: 'Tools',
        skillsArray: ['React', 'AngularJS', 'Boostrap', 'Materialize', 'Google Material Design', 'Node.js', 'Express', 'PostgreSQL', 'jQuery', 'git/Github', 'AJAX', 'Heroku', 'RESTful APIs']
      },
      {
        skillType: 'Other',
        skillsArray: ['Agile', 'Customer Service', 'Writing', 'Time Management', 'Self Motivation', 'Teamwork', 'Creativity']
      }
    ],
    contacting: false
  }

  contactShowHandler = () => {
    this.setState({contacting: true})
  }

  contactHideHandler = () => {
    this.setState({contacting: false})
  }

  render() {

    return (
      <React.Fragment>
        <Modal show={this.state.contacting} modalClosed={this.contactHideHandler}>
          <Form />
        </Modal>
        <Toolbar showForm={this.contactShowHandler}/>
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
          <Projects projectsList={this.state.projectsList} />
        </BackgroundImage>
        <TitleRow>
          <h1>Skills</h1>
        </TitleRow>
        <BackgroundImage background="Boston">
          <Skills skillsList={this.state.skillsList} />
        </BackgroundImage>
      </React.Fragment>
  );
  }
}

export default App;
