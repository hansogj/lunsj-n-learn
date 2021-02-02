import styled from 'styled-components';
import { base, pallet } from '../constants';
import { base_X, center, half } from './style.utils';


export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > * {
    flex-grow: 0;
  }
`;

export const Container = styled.div`
  h1 {
    text-align: center;
  }
  background-color: ${pallet.gray_1};
  color: ${pallet.gray_3};
  padding: calc(${base}*2);
  a {
    margin:0  ${base} ;
    display:inline-block;
  }
`;


export const CenteredIllustration = styled.img`
  ${center()};
  width: 50%;
  border-radius: ${half};
  margin-top: ${base_X(3)};
  margin-bottom: ${base_X(3)};
`;