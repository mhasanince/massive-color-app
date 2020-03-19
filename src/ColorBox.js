import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './styles/ColorBox.css';

export default class ColorBox extends Component {
  state = {
    isCopied: false,
  };

  changeCopyState = () => {
    this.setState(
      {
        isCopied: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            isCopied: false,
          });
        }, 1500);
      }
    );
  };

  render() {
    const { background, name } = this.props;
    const { isCopied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: background }} className="ColorBox">
          <div
            style={{ backgroundColor: background }}
            className={`copy-overlay ${isCopied && 'show'}`}
          />
          <div className={`copy-message ${isCopied && 'show'}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="ColorBox-copy-container">
            <span className="ColorBox-name">{name}</span>
            <button className="ColorBox-copy">Copy</button>
          </div>
          <span className="ColorBox-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}
