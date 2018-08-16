import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import classes from './Toolbar.css';

// import resume from '../../assets/Resume.pdf';
import rental from '../../assets/rental.pdf';

const toolbar = (props) => {

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
          <div className={classes.RightBorder}>
            {/*<h2>
              <a href="/">The Willow Barn</a>
            </h2>*/}
          </div>
          <div className={classes.row}>
            <div>
              <Button onClick={props.showVenue}>The Venue</Button>
              {/*<Button href="https://linkedin.com/in/nathanejbrown" target="_blank">Linkedin</Button>*/}
            </div>
            <div>
              <Button href={rental} target="_blank">Info</Button>
              <Button onClick={props.showForm}>Contact</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )

}

export default toolbar;
