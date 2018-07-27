import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from './Toolbar.css';

const toolbar = () => (
  <React.Fragment>
    <AppBar position="static">
      <Toolbar className={classes.Toolbar}>
        <Typography variant="title" color="inherit">
          Nathan Dennis
        </Typography>
        <div>
          <Button color="inherit" href="https://github.com/nathanejbrown">Github</Button>
          <Button color="inherit" href="https://linkedin.com/in/nathanejbrown">Linkedin</Button>
        </div>
      </Toolbar>
    </AppBar>
  </React.Fragment>
)

export default toolbar;
