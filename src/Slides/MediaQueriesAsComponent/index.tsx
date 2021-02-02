import React, { ReactChild } from 'react';
import MediaQuery from 'react-responsive';
import { screenSizes } from '../MediaQueries/media.queries';
import { Container } from '../StyledComponents/style';

type ContainerProps = { children: ReactChild | ReactChild[] };

export const OnLargeScreens = (props: ContainerProps): JSX.Element => (
  <MediaQuery minWidth={screenSizes.tablet} {...props} />
);
export const OnSmallScreens = (props: ContainerProps): JSX.Element => (
  <MediaQuery maxWidth={screenSizes.tablet - 1} {...props} />
);

const MediaQueriesAsComponent = (): JSX.Element => (
  <Container className="box">
    <h1>Media Queries As Component</h1>
    <OnLargeScreens>
      <div className="center">
        <code>npm i -s react-responsive @types/react-responsive</code>
      </div>
    </OnLargeScreens>
    <OnSmallScreens>
      Kan også spørre på verdier som orientation, scan, aspectRatio, deviceAspectRatio, height, deviceHeight, width,
      deviceWidth, color, colorIndex, monochrome, resolution and type
    </OnSmallScreens>
  </Container>
);

export default MediaQueriesAsComponent;
