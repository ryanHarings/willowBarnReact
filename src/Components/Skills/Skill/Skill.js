import React from 'react';
import Icon from '@material-ui/core/Icon';

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
    {/*<FontAwesomeIcon icon={myIcon} size='3x'/>*/}
          <h2>{props.type}</h2>
          <p>{props.desc}</p>
          <p>{props.list[0]}</p>
          <p>{props.list[1]}</p>
          <a href={props.link}><Icon left>location_on</Icon>24159 150th Ave Cadott, WI 54727</a>
      </div>
    </div>
  )
}

export default skill;
