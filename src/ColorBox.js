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
    const { hex, name } = this.props;
    const { isCopied } = this.state;
    return (
      <CopyToClipboard text={hex} onCopy={this.changeCopyState}>
        <div style={{ backgroundColor: hex }} className="ColorBox">
          <div
            style={{ backgroundColor: hex }}
            className={`copy-overlay ${isCopied && 'show'}`}
          />
          <div className={`copy-message ${isCopied && 'show'}`}>
            <h1>Copied!</h1>
            <p>{hex}</p>
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
