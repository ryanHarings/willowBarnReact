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
        title: 'Reception, Dining and Dancing',
        description: 'Lower barn level for reception area, upper hayloft for dining and dancing',
        technologies: ['Patio with Firepit', '-', 'Milkhouse Bar'],
        githubUrl: 'https://github.com/nathanejbrown/beerleagueme',
        deployedUrl: 'https://nathanejbrown.github.io/beerleagueme'
      },
      {
        title: 'Separate Bridal Suite',
        description: 'A space for the bride and her wedding party',
        technologies: ['Quaint', '-', 'Private'],
        githubUrl: 'https://github.com/nathanejbrown/Burger-Builder',
        deployedUrl: 'https://nathanejbrown.github.io/Burger-Builder'
      }
    ],
    skillsList: [
      {
        skillType: 'The Willow Barn',
        skillDesc: 'Enjoy a quiet, country setting with rustic charm on this 1909 family homestead. Plan your perfect day surrounded by willow trees, original hand-hewn beams and farm antiques.',
        skillsArray: ['Phone: (715)-497-4531', 'Email: events@thewillowbarn.com'],
        githubUrl: '',
        deployedUrl: ''
      }
      /*{
        skillType: 'Fun',
        skillsArray: ['words', 'words', 'words']
      },
      {
        skillType: 'Memorable',
        skillsArray: ['Willow', 'Country']
      }*/
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
          <h1>Rustic Weddings</h1>
        </TitleRow>
        <BackgroundImage background="Winnipeg">
          <Projects projectsList={this.state.projectsList} />
        </BackgroundImage>
        <TitleRow>
          <h1>Nostalgic Parties</h1>
        </TitleRow>
        <BackgroundImage background="Boston">
          <Skills skillsList={this.state.skillsList} className="test" />
        </BackgroundImage>
      </React.Fragment>
    );
  }
}

export default App;
