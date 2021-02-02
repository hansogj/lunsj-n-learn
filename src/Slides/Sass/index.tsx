import React from 'react';
import './style.scss';
import SassLogo from './sass.logo.svg';

const brackets = `{}`;

const Sass = () : JSX.Element=> (
  <div className="sass box">
    <div className="grand awkwardDiv">... and then there is</div>
    <br />
    <div className="container">
      <img className="item" src={SassLogo} alt="SASS-logo" />
      <h1 className="item"> {brackets}</h1>
    </div>

  </div>
);

export default Sass;
