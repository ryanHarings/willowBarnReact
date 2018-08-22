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
import PicModal from '../Components/UI/PicModal/PicModal';
import Form from '../Components/UI/Form/Form';
import Venue from '../Components/UI/Venue/Venue';

class App extends Component {

  state = {
    projectsList: [
      {
        title: '1800\'s restored barn in a quiet country setting',
        description: 'Multi-level, open concept barn venue',
        technologies: ['Dance Floor', 'Patio w/ Firepit', 'Underground Reception Hall', 'Bar Room'],
        githubUrl: 'https://github.com/nathanejbrown/beerleagueme',
        deployedUrl: 'https://nathanejbrown.github.io/beerleagueme'
      },
      {
        title: 'Secluded Bridal Suite',
        description: 'Private space to be pampered',
        technologies: ['Detached', 'Tranquil', 'Spacious'],
        githubUrl: 'https://github.com/nathanejbrown/Burger-Builder',
        deployedUrl: 'https://nathanejbrown.github.io/Burger-Builder'
      }
      /*{
        title: 'Tribbianify',
        description: 'This was a project I did for fun that’s based on an episode of Friends where Joey uses a thesaurus on every word in a letter he’s writing to make it sound more intelligent.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
        githubUrl: 'https://github.com/nathanejbrown/q1Project',
        deployedUrl: 'https://nathanejbrown.github.io/q1Project'
      },
      {
        title: 'BeerLeagueMe',
        description: 'This is an ongoing project to create a network of local sports events.',
        technologies: ['JavaScript', 'AngularJS', 'Node.js', 'Express', 'PostgreSQL'],
        githubUrl: 'https://github.com/nathanejbrown/beerleagueme',
        deployedUrl: 'https://nathanejbrown.github.io/beerleagueme'
      },
      {
        title: 'Burger Builder',
        description: 'This is an ongoing project that I\'m working on as I continue to learn React.',
        technologies: ['JavaScript', 'React', 'Axios'],
        githubUrl: 'https://github.com/nathanejbrown/Burger-Builder',
        deployedUrl: 'https://nathanejbrown.github.io/Burger-Builder'
      },
      {
        title: 'Tribbianify',
        description: 'This was a project I did for fun that’s based on an episode of Friends where Joey uses a thesaurus on every word in a letter he’s writing to make it sound more intelligent.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX'],
        githubUrl: 'https://github.com/nathanejbrown/q1Project',
        deployedUrl: 'https://nathanejbrown.github.io/q1Project'
      }*/
    ],
    skillsList: [
      {
        skillType: 'Affordable',
        skillsArray: ['', 'nice', 'fun']
      },
      {
        skillType: 'Fun',
        skillsArray: ['words', 'words', 'words']
      },
      {
        skillType: 'Memorable',
        skillsArray: ['Willow', 'Country']
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

  venueShowHandler = () => {
    this.setState({viewing: true})
  }

  venueHideHandler = () => {
    this.setState({viewing: false})
  }

  render() {

    return (
      <React.Fragment>
        <Modal show={this.state.contacting} modalClosed={this.contactHideHandler}>
          <Form />
        </Modal>
        <PicModal show={this.state.viewing} modalClosed={this.venueHideHandler}>
          <Venue />
        </PicModal>
        <Toolbar showForm={this.contactShowHandler} showVenue={this.venueShowHandler}/>
      
        <BackgroundImage background="Albuquerque">
          <CenterBox>
            <h1>The Willow Barn</h1>
      {/*  <hr />
            <h2>Your wedding, your day, your space</h2> */}
          </CenterBox>
        </BackgroundImage>
        <TitleRow>
          <h1>Rustic</h1>
        </TitleRow>
        <BackgroundImage background="Winnipeg">
          <Projects projectsList={this.state.projectsList} />
        </BackgroundImage>
        <TitleRow>
          <h1>Nostalgic</h1>
        </TitleRow>
        <BackgroundImage background="Boston">
      {/*<Skills skillsList={this.state.skillsList} />*/}
        </BackgroundImage>
      </React.Fragment>
    );
  }
}

export default App;
