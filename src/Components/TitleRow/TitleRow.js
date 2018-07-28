import React from 'react';

import classes from './TitleRow.css';

const titleRow = (props) => (
  <div className={classes.TitleRow}>
    {props.children}
  </div>
)

export default titleRow;
