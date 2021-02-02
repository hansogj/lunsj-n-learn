import React from 'react';
import { Container } from '../StyledComponents/style';
import PizzaFyll from './pizzafyll.jpg';
import { PizzaIllustration, RectContainer, UglyH1, UglyP } from './stiil.style';

const Stiil = (): JSX.Element => (
  <Container  bgColor="transparent">
    <UglyH1>Stæl og Stil som Ståle Stiil </UglyH1>
    <RectContainer>
      <PizzaIllustration src={PizzaFyll} alt="! Ståle Stiil" />
    </RectContainer>
    <UglyP>
      Vi tar en rask gjennomgang av ulike måter å stilsette front-end applikasjoner - spesielt React. Vi ser på på pros
      & pros & cons og hvordan de legger til rette for
      <br />
      gjenbrukbarhet - konsistent design - A11Y/UU
      <br />
      <br />
      Til sist presenteres{' '}
      <a href="https://styled-system.com/" title="Styled Systems">
        Styled System
      </a>
      og hvordan det brukes for å lage StoreBlocks - byggestenene til
      <a href="www.storebrand.no" title="Storebrand">
        www.storebrand.no
      </a>
    </UglyP>
  </Container>
);

export default Stiil;
