/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { base, pallet } from '../constants';
import { Container as MainContainer } from '../StyledComponents/style';
import { base_X, double, size } from '../StyledComponents/style.utils';
import { desktop, tablet, mobile, mobileDown, tabletUp, smallMobile } from './media.queries';

const Box = styled.div<{ type: string }>`
  background-color: ${({ type }) => type || pallet.dark};
  color: ${({ type }) => ([pallet.dark, pallet.gray_1].includes(type) ? pallet.gray_3 : pallet.gray_1)};
  border: solid 1px ${pallet.green_light};
  ${mobileDown(`${size(10).join('')}`)}
  ${tabletUp(`${size(16).join('')}`)}
  
  flex-grow: 1;
  ${mobileDown(`flex-basis: 100%;`)}

  padding: ${double};
  margin: ${base};
`;

export const Container = styled.div`
  display: flex;
  margin: ${double};
  padding: ${double};

  ${desktop(`flex-direction: row; justify-content: space-between; `)}
  ${tablet(`flex-direction: row-reverse; flex-wrap: wrap; justify-content: center;`)}
  ${mobile(
    `flex-direction: column; flex-wrap: wrap-reverse; justify-content: space-evenly; max-height: ${base_X(50).join(
      ''
    )};`
  )}
  ${smallMobile(`flex-direction: column-reverse; flex-wrap: nowrap`)}
`;

const MediaQueries = (): JSX.Element => {
  return (
    <MainContainer className="box">
      <Container>
        {Object.entries(pallet).map(([key, val]: string[]) => (
          <Box key={key} type={val}>
            {key}
            <br />
            {val}
          </Box>
        ))}
      </Container>
    </MainContainer>
  );
};

export default MediaQueries;
