import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { slides } from '../Slides';
import { Nav } from './Nav';

import './nav.css';

const AppRouter = (): JSX.Element => (
  <Router>
    <Nav />
    <Switch>
      {Array.from(Array(slides.length).keys()).map((i) => (
        <Route key="slides_{id}" path={`/${i}`}>
          <div className="slideView">{slides[i]}</div>
        </Route>
      ))}
      <Route path="/">{slides[0]}</Route>
    </Switch>
  </Router>
);

export default AppRouter;
