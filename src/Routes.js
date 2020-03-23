import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './colorHelpers';

export default class Routes extends Component {
  findPalette(id) {
    return this.props.palettes.find(
      (palette) => palette.id.toLowerCase() === id.toLowerCase()
    );
  }

  render() {
    const { palettes } = this.props;
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
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/massive-color-app/palette/:id/:color"
          render={(routeProps) => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
              colorId={routeProps.match.params.color}
            />
          )}
        />
        <Route render={() => <PaletteList palettes={palettes} />} />
      </Switch>
    );
  }
}
