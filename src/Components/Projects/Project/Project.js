import React from 'react';

import classes from './Project.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const project = (props) => {

  var technologies = props.tech.map((lang, i) => (
    <li key={i}>
      {lang}
    </li>
  ))

  return (
    <Card className={classes.card}>
      <CardContent>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <ul>
          {technologies}
        </ul>
    {/*<div className={classes.horizontalAlign}>
          <a href={props.githubUrl} target="_blank">
            <div>
              <FontAwesomeIcon icon={faCoffee} />
              <p>Github Repo</p>
            </div>
          </a>
          <div className={classes.borderLine}></div>
          <a href={props.deployedUrl} target="_blank">
            <div>
              <FontAwesomeIcon icon={faLink} />
              <p>Deployed Site</p>
            </div>
          </a>
        </div>*/}
      </CardContent>
    </Card>
  )

}

export default project;
