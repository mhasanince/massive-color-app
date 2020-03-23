import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  palettes: {
    width: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
};

export default withStyles(styles)(
  class PaletteList extends Component {
    goToPalette = (id) => {
      this.props.history.push(`/massive-color-app/palette/${id}`);
    };

    render() {
      const { classes, palettes } = this.props;
      return (
        <div className={classes.root}>
          <h1>PaletteList</h1>
          <div className={classes.palettes}>
            {palettes.map((palette, idx) => (
              <MiniPalette
                key={idx}
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      );
    }
  }
);
