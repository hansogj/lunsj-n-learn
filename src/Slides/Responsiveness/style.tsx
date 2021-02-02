import styled, { css } from 'styled-components';
import { pallet } from '../constants';
import { double } from '../StyledComponents/style.utils';

export const Emp = styled.span`
  font-weight: 300;
  font-size: 1.2em;
  font-family: italic;
`;

const pre = (color: string) =>
  css`
    pre {
      color: ${color};
    }
  `;

export const Responsive = styled.div`
  padding: ${double};
  color: ${pallet.gray_1};
  background-color: ${pallet.gray_3};
  ${pre(pallet.gray_1)};

  @media only screen and (min-width: 768px) and (max-width: 959px) {
    background-color: ${pallet.green_contrast};
    ${pre(pallet.green_light)};
  }
  @media only screen and (min-width: 959px) {
    background-color: ${pallet.green_light};
    ${pre(pallet.dark)};
  }

`;
