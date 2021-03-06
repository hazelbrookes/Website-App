import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import tileData from '../builds';

const BuildGrid = () => {

    return (
        <GridList cellHeight={400} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Builds</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
                actionIcon={ tile.link ? 
                <IconButton aria-label={`info about ${tile.title}`} href={tile.link}>
                  <InfoIcon fontSize="large"/>
                </IconButton> : null
              }
            />
          </GridListTile>
        ))}
      </GridList>
    );
};


export default BuildGrid;