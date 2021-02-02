import React from 'react';
import ListItems from './ListItems';
import { Container, FlexContainer } from './style';

const StyledComponents = () => (
  <Container>
    <h1>Styled Components</h1>
    <FlexContainer>
      <ListItems items={['React Komponenter', 'ES6 & CSS', 'Klasse Kluss', 'Risikofri refaktorering']} />
      <ListItems  inverse items={['CSS as template strings', 'Lack of IDE-suppport']} />
    </FlexContainer>
  </Container>
);

export default StyledComponents;
