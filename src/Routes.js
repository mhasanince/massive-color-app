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
          render={(routeProps) => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/massive-color-app/palette/:id"
          render={getPalette}
        />
        <Route
          exact
          path="/massive-color-app/palette/:id/:color"
          render={() => <h1>asdasd</h1>}
        />
        <Route render={() => <PaletteList palettes={palettes} />} />
      </Switch>
    );
  }
}
