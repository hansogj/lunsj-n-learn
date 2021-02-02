import styled from 'styled-components';
import { pallet } from '../constants';
import {  FlexContainer, } from '../StyledComponents/style';
import { center,half, base_X, size  } from '../StyledComponents/style.utils';




export const IconContainer = styled.div`
  margin: ${base_X(2)} 0;
  padding: ${base_X(2)};
  background: ${pallet.gray_3};
  color: ${pallet.gray_1};
  border-radius: ${half};
`;

export const IconList = styled(FlexContainer)`
  img {
    ${center()};
    ${size(8)}
  }
`;
