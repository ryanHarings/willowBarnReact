import React from 'react';

import classes from './CenterBox.css';

const centerBox = (props) => (
  <div className={classes.CenterBox}>
    {props.children}
  </div>
)

export default centerBox;
