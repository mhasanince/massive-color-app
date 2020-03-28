import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
    };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  changeFormat = (format) => {
    this.setState({
      format: format,
    });
  };

  gatherShades(palette, colorId) {
    let shades = [];
    const colors = palette.colors;
    for (let key in colors) {
      shades = shades.concat(
        colors[key].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  }

  render() {
    const { format } = this.state;
    const { name, emoji, id } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        background={color[format]}
        name={color.name}
        showMore={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar
          format={format}
          changeFormat={this.changeFormat}
          isSingleColor={true}
        />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/massive-color-app/palette/${id}`} className="back">
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter name={name} emoji={emoji} />
      </div>
    );
  }
}
