import React from 'react';
import ListItems from '../StyledComponents/ListItems';
import { Container, FlexContainer } from '../StyledComponents/style';

const StyledMediaQuery = (): JSX.Element => (
  <Container className="box">
    <h1>Styled Media Queries</h1>
    <FlexContainer>
      <ListItems
        items={[
          'definerte endepunkter',
          'Tre metoder for å genere media queries:',
          `* lessThan(breakpoint | size)`,
          `* greaterThan(breakpoint | size)`,
          `* between(firstBreakpoint | firstSize, lastBreakpoint | lastSize)`,
        ]}
      />
    </FlexContainer>
  </Container>
);

export default StyledMediaQuery;
