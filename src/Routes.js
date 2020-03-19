import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

export default class Routes extends Component {
  render() {
    const getPalette = (props) => {
      let id = props.match.params.id;
      let currentPalette = this.props.palettes.find(
        (palette) => palette.id.toLowerCase() === id.toLowerCase()
      );
      return <Palette palette={generatePalette(currentPalette)} {...props} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ol>
              <li>
                <Link to="/palette/material-ui-colors">
                  /material-ui-colors
                </Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-v1">/flat-ui-colors-v1</Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-dutch">
                  /flat-ui-colors-dutch
                </Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-american">
                  /flat-ui-colors-american
                </Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-aussie">
                  /flat-ui-colors-aussie
                </Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-british">
                  /flat-ui-colors-british
                </Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-indian">
                  /flat-ui-colors-indian
                </Link>
              </li>
              <li>
                <Link to="/palette/flat-ui-colors-french">
                  /flat-ui-colors-french
                </Link>
              </li>
            </ol>
          )}
        />
        <Route exact path="/palette/:id" render={getPalette} />
      </Switch>
    );
  }
}
