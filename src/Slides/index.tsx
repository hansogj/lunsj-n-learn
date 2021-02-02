import React from 'react';
import StiilSlide from './Stiil';

import AppSlide from './App';
import AppCode from './App/code';

import SassSlide from './Sass';
import SassCode from './Sass/code';

import BootstrapSlide from './Bootstrap/index';
import BootstrapCode from './Bootstrap/code';

import FrameworksSlide from './Frameworks';

import StyledComponentsSlide from './StyledComponents';
import StyledComponentsCodes from './StyledComponents/code';




export const slides = [
  <StiilSlide key="slide_0" />,

  <AppSlide key="slide_1" />,
  <AppCode key="slide_2" />,

  <SassSlide key="slide_3" />,
  <SassCode key="slide_4" />,

  <BootstrapSlide key="slide_5" />,
  <BootstrapCode key="slide_6" />,

  <FrameworksSlide key="slide_7" />,

  <StyledComponentsSlide key="slide_8" />,
...StyledComponentsCodes  
  
];
