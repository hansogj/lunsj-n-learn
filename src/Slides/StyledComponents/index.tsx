import React from 'react';
import ListItems from './ListItems';
import { Container, FlexContainer } from './style';

const StyledComponents = (): JSX.Element => (
  <Container>
    <h1>Styled Components</h1>
    <FlexContainer>
      <ListItems items={['React Komponenter', 'ES6 & CSS', 'Utvidbart og modulertbart', 'Klasse Kluss', 'Risikofri refaktorering']} />
      <ListItems inverse items={['CSS as template strings', 'Blanke ark', 'Mangler IDE-support']} />
    </FlexContainer>
  </Container>
);

export default StyledComponents;
