import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import classes from './Toolbar.css';

import resume from '../../assets/Resume.pdf';

const toolbar = () => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar className={classes.Toolbar}>
        <h2>
          <a href="/">Nathan Dennis</a>
        </h2>
        <div>
          <Button color="inherit" href="https://github.com/nathanejbrown">Github</Button>
          <Button color="inherit" href="https://linkedin.com/in/nathanejbrown">Linkedin</Button>
          <Button href={resume} target = "_blank">Resume</Button>
        </div>
      </Toolbar>
    </AppBar>
  </React.Fragment>
)

export default toolbar;
