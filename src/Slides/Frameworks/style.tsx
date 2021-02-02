import styled from 'styled-components';
import { pallet } from '../constants';
import { FlexContainer } from '../StyledComponents/style';
import { center, half, double, size } from '../StyledComponents/style.utils';

export const IconContainer = styled.div`
  margin: ${double} 0;
  padding: ${double};
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
