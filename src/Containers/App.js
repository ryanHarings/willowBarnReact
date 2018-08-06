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
        title: 'This is good place for wedding',
        description: 'Spend money here and good event happen',
        technologies: ['Barn', 'Bridal Suite', 'Bar'],
        githubUrl: 'https://github.com/nathanejbrown/beerleagueme',
        deployedUrl: 'https://nathanejbrown.github.io/beerleagueme'
      },
      {
        title: 'This is good place for not wedding',
        description: 'Party party party, but be nice',
        technologies: ['Bar', 'Dancefloor', 'Lawn', 'Firepit'],
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
        skillType: 'Harings',
        skillsArray: ['cheap', 'nice', 'fun']
      },
      {
        skillType: 'People',
        skillsArray: ['words', 'words', 'words']
      },
      {
        skillType: 'Other',
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
            <h1>Weddings, Parties, Whatever</h1>
            <hr />
            <h2>Historic, Rustic, Sexy</h2>
          </CenterBox>
        </BackgroundImage>
        <TitleRow>
          <h1>First Info</h1>
        </TitleRow>
        <BackgroundImage background="Winnipeg">
          <Projects projectsList={this.state.projectsList} />
        </BackgroundImage>
        <TitleRow>
          <h1>Second Info</h1>
        </TitleRow>
        <BackgroundImage background="Boston">
          <Skills skillsList={this.state.skillsList} />
        </BackgroundImage>
      </React.Fragment>
  );
  }
}

export default App;
