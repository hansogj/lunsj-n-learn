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

import Responsiveness from './Responsiveness';
import ResponsivenessCode from './Responsiveness/code';

import StyledMediaQuery from './MediaQueries';
import { MediaQueriesCodes, MediaQueriesExampleCodes } from './MediaQueries/code';
import MediaQueryExample from './MediaQueries/example';

import MediaQueriesAsComponent from './MediaQueriesAsComponent';
import MediaQueriesAsComponentCode from './MediaQueriesAsComponent/code';

import StyledSystem from './StyledSystem';
import StyledSystemCode from './StyledSystem/code';

import StoreBlocks from './StoreBlocks';
export const slides = [
  <StiilSlide key="slide_0" />,

  <AppSlide key="slide_1" />,
  <AppCode key="slide_2" />,

  <SassSlide key="slide_3" />,
  <SassCode key="slide_4" />,

  <BootstrapSlide key="slide_5" />,
  <FrameworksSlide key="slide_7" />,
  <BootstrapCode key="slide_6" />,


  <StyledComponentsSlide key="slide_8" />,
  ...StyledComponentsCodes,

  <Responsiveness key="slide_9" />,
  <ResponsivenessCode key="slide_10" />,

  <StyledMediaQuery key="slide_11" />,
  <MediaQueriesCodes key="slide_12" />,

  <MediaQueriesExampleCodes key="slide_13" />,
  <MediaQueryExample key="slide_14" />,

  <MediaQueriesAsComponent key="slide_15" />,
  <MediaQueriesAsComponentCode key="slide_16" />,

  <StyledSystem key="slide_16" />,
  ...StyledSystemCode,

  <StoreBlocks key="StoreBlocks" />,
];
