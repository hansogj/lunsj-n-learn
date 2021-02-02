import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import HOME from '../icons/material/home.svg';
import LEFT from '../icons/material/left.svg';
import RIGHT from '../icons/material/right.svg';
import { slides } from '../Slides';

const getSlideNr = (path: string): number =>
  path
    .split('/')
    .last()
    .map(parseInt)
    .filter((i) => !isNaN(i))
    .onEmpty((arr: number[]) => arr.push(0))
    .shift() as number;

export const Nav = (): JSX.Element => {
  const [slide, setSlide] = useState(0);
  const history = useHistory();
  const parsedSlideNr = getSlideNr(useLocation().pathname);

  const goto = useCallback(
    (increment: number): string => {
      let nextIndex = slide + increment;
      if (nextIndex < 0) {
        nextIndex = slides.length - 1;
      }
      if (nextIndex === slides.length) {
        nextIndex = 0;
      }
      return `/${nextIndex}`;
    },
    [slide]
  );

  const arrowNavigation = useCallback(
    (event) => {
      if (event.keyCode === 39) history.push(goto(+1));
      if (event.keyCode === 37) history.push(goto(-1));
    },
    [history, goto]
  );

  useEffect(() => setSlide(parsedSlideNr), [parsedSlideNr]);

  useEffect(() => {
    document.addEventListener('keydown', arrowNavigation, false);
    return () => {
      document.removeEventListener('keydown', arrowNavigation, false);
    };
  });

  return (
    <nav>
      <Link className="link" to={`/0`}>
        <img src={HOME} alt="home" />
      </Link>
      <Link className="link" to={goto(+1)}>
        <img src={RIGHT} alt="next page" />
      </Link>
      <Link className="link" to={goto(-1)}>
        <img src={LEFT} alt="previos page" />
      </Link>
    </nav>
  );
};
