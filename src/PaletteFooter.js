import React from 'react';

export default function PaletteFooter(props) {
  const { name, emoji } = props;
  return (
    <footer className="Palette-footer">
      <span className="Palette-name">{name}</span>
      <span className="Palette-emoji">{emoji}</span>
    </footer>
  );
}
