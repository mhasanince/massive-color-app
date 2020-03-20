import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '25%',
    backgroundColor: '#fdfdfd',
    border: '1px solid #000000',
    borderRadius: '5px',
    padding: '.5rem',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  container: {},
  colors: {
    backgroundColor: '#dae1e4',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
  },
  color: {
    width: '20%',
    height: '40px',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: '#000000',
    padding: '.5rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '.5rem',
    fontSize: '1.5rem',
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id } = props;
  return (
    <div className={classes.root}>
      <Link to={`/massive-color-app/palette/${id}`}>
        <div className={classes.container}>
          <div className={classes.colors}>
            {colors.map((color) => (
              <div
                key={color.name}
                style={{ backgroundColor: color.color }}
                className={classes.color}
              />
            ))}
          </div>
          <h5 className={classes.title}>
            {paletteName}
            <span className={classes.emojo}>{emoji}</span>
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
