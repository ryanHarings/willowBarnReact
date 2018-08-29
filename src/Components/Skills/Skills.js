import React from 'react';
import Skill from './Skill/Skill';
import classes from './Skills.css';

const Skills = (props) => {
  var mappedSkills = props.skillsList.map((skill, i) => (
    <Skill
      key={i}
      type={skill.skillType}
      desc={skill.skillDesc}
      list={skill.skillsArray}
    />
  ))

  return(
    <React.Fragment>
      <div className={classes.AllSkills}>
        {mappedSkills}
      </div>
    </React.Fragment>
  )
}

export default Skills;
