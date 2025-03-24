import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const divStyle = {
  width: '100px',
  height: '50px',
  padding: '20px',
  border: '1px solid',
};


export default function MyApp() {
  return (
      <p style={divStyle}><FontAwesomeIcon icon={faCoffee} /> I am a paragraph of text that has a few words in it.</p>
  );
};
