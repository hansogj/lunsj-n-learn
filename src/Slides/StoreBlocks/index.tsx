import React from 'react';
import styled from 'styled-components';
import { pallet } from '../constants';
import ListItems from '../StyledComponents/ListItems';
import { Container, FlexContainer } from '../StyledComponents/style';
const H1 = styled.h1`
  a {
    color: ${pallet.white};
  }
`;

const StoreBlocks = (): JSX.Element => (
  <Container>
    <H1>
      <a
        href="https://storebrand.design/?path=/docs/components-button--default"
        target="_blank"
        rel="noreferrer"
        title="Storebrand StoreBlocks"
      >
        Storebrand StoreBlocks
      </a>
    </H1>

    <FlexContainer>
      <ListItems
        items={[
          'Styled Components & Styled System',
          'Felles, delt konfigurasjon (farger, spacing, fonter mv)',
          'React & Angular',
          'Storybook',
          'Lerna',
        ]}
      />
    </FlexContainer>

    <h2></h2>
  </Container>
);

export default StoreBlocks;
