import React from 'react';
import ListItems from './ListItems';
import { Container, FlexContainer } from './style';

const StyledComponents = (): JSX.Element => (
  <Container>
    <h1>Styled Components</h1>
    <FlexContainer>
      <ListItems
        items={[
          'React Komponenter',
          'ES6 & CSS',
          'Utvidbart og modulertbart',
          'Klasse Kluss',
          'Reduserer Refaktorering Risiko',
          'Profiler / Themes',
          'eslint-plugin-styled-components-a11y ',
        ]}
      />
      <ListItems items={['CSS som template strings', 'Blanke ark', 'Mangler IDE-support', 'Responsivitet']} inverse />
    </FlexContainer>
  </Container>
);

export default StyledComponents;
