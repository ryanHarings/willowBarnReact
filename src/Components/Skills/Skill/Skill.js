import React from 'react';

import classes from './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const skill = (props) => {

  let myIcon;

  if (props.type === 'Languages') {
    myIcon = faKeyboard
  } else if (props.type === 'Tools') {
    myIcon = faWrench
  } else {
    myIcon = faAlignJustify
  }

  return (
    <div className={classes.CircleCard}>
      <div>
          <FontAwesomeIcon icon={myIcon} size='3x'/>
          <h2>{props.type}</h2>
          <p>{props.list.join(', ')}</p>
      </div>
    </div>
  )
}

export default skill;
