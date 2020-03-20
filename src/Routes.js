import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import PaletteList from './PaletteList';

export default class Routes extends Component {
  render() {
    const { palettes } = this.props;
    const getPalette = (props) => {
      let id = props.match.params.id;
      let currentPalette = palettes.find(
        (palette) => palette.id.toLowerCase() === id.toLowerCase()
      );
      return <Palette palette={generatePalette(currentPalette)} {...props} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/massive-color-app"
          render={() => <PaletteList palettes={palettes} />}
        />
        <Route
          exact
          path="/massive-color-app/palette/:id"
          render={getPalette}
        />
        <Route render={() => <PaletteList palettes={palettes} />} />
      </Switch>
    );
  }
}
