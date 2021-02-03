import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { pallet } from '../constants';
import ListItems from '../StyledComponents/ListItems';
import { Container as ContainerImpl } from '../StyledComponents/style';
import { FlexContainer, H1, H2 } from './style';
import Rect from './styled-system.png';
import theme from './theme';

const Container = styled(ContainerImpl)`
  background-image: url(${Rect});
  background-color: ${pallet.white};
  background-repeat: repeat;
`;

const StyledSystem = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Container>
      <H1 fontSize={[12, 18, 26, 32]} color="dark">
        Styled System
      </H1>
      <H2 fontSize={{ m: 2, t: 5, desktop: 4 }} mt={3} padding={[2, 1, 2, 4, 3]} bg="lavender" color="dark">
        Primitive byggestener for komponentbasert designsystem
      </H2>
      <FlexContainer mt={4} py={2} bg="dark" width={{ t: 2 / 3, d: 1 / 2, sm: 1 }}>
        <ListItems items={['Liten konfigurasjon', 'Konsistens', 'Resonsive spacing', 'A11Y', 'Adaptiv']} />
        <ListItems
          inverse
          items={[
            'Ikke fult ut responsive',
            'Skummel refaktorering',
            'Responsiv spacing som array av index-posisjoner !!!!',
            'Inline styling',
          ]}
        />
      </FlexContainer>
    </Container>
  </ThemeProvider>
);

export default StyledSystem;
