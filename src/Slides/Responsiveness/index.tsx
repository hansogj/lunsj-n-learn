import React from 'react';
import { Container } from '../StyledComponents/style';
import { Emp, Responsive } from './style';

const Responsiveness = (): JSX.Element => (
  <Container className="box">
    <Responsive>
      <h2 className="center">
        <Emp>@media queries</Emp> kan være ganske så kjipt
      </h2>
    </Responsive>
  </Container>
);

export default Responsiveness;
