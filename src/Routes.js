import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Route exact path="/" render={() => <h1>HomePage</h1>} />
        <Route exact path="/palette/:id" render={getPalette} />
        <Route render={() => <h1>HomePage</h1>} />
      </Switch>
    );
  }
}
