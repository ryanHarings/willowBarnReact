import React from 'react';

import classes from './BackgroundImage.css';

const backgroundImage = (props) => {
  let myClasses = [];
  if (props.city) {
    myClasses = [classes.BackgroundImage, classes[props.city]];
  } else {
    myClasses = [classes.BackgroundImage];
  }
  return (
    <div className={myClasses.join(' ')}>
      {props.children}
    </div>
  )
}


export default backgroundImage;
