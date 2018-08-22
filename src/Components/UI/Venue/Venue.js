import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
/* import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'ryanharings'}); */
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

/*<Image cloudName="ryanharings" publicId="WillowBarn/DSCN0455" width="300" crop="scale" />*/

const tileData = ["WillowBarn/DSCN0455", "WillowBarn/DSCN0456", "WillowBarn/DSCN0468", "WillowBarn/DSCN0496", "WillowBarn/DSCN0475", "WillowBarn/DSCN0479"];
const tileNames = ['Willow', 'Farm', 'Barn', 'Bridal', 'Decor', 'Milkhouse']

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '300',
    justifyContent: 'center',
    align: 'center',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    marginRight: '10px'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:'linear-gradient(to top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0) 0%)',
  },
})

const Venue = (props) => {  
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5} cellHeight={400}>
        {tileData.map((tile, index) => (
          <GridListTile key={tile}>
            <Image cloudName="ryanharings" publicId={tile} height="350px" />
            <GridListTileBar
              title={tileNames[index]}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
          /* actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
               } */
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

/*SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(Venue);
