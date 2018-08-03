import React from 'react';

import Project from './Project/Project';

import classes from './Projects.css';

const projects = (props) => {
  const allProjects = props.projectsList;

  var mappedProjects = allProjects.map((project, i) => (
    <Project
      key={i}
      title={project.title}
      tech={project.technologies}
      description={project.description}
      githubUrl={project.githubUrl}
      deployedUrl={project.deployedUrl}/>
    ))

    return(
      <React.Fragment>
        <div className={classes.allProjects}>
          {mappedProjects}
        </div>
      </React.Fragment>
    );

}

export default projects;
