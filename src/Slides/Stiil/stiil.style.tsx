import styled from 'styled-components';
import { pallet } from '../constants';
import { CenteredIllustration, Container } from '../StyledComponents/style';
import { base_X, center, size } from '../StyledComponents/style.utils';
import logo from './logo.png';

export const RectContainer = styled(Container)`
  background-image: url(${logo});
  background-color: ${pallet.white};
  background-repeat: repeat;
  background-size: 40px;
`;

export const gradient = () => `
linear,
left top,
right top,
 color-stop(0,#f22),
 color-stop(0.15,#f2f),
 color-stop(0.3,#22f),
 color-stop(0.45,#2ff),
 color-stop(0.6,#2f2),
 color-stop(0.75,#2f2),
 color-stop(0.9,#ff2),
 color-stop(1,#f22) 
`;

export const PizzaIllustration = styled(CenteredIllustration)`
  ${size(70)}
`;

export const UglyH1 = styled.h1`
  background-image: -webkit-gradient(${gradient()});
  background-image: gradient(${gradient()});
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const UglyP = styled.p`
  ${center()};
  color: ${pallet.sass_pink};
  filter: brightness(1.8);
  width: 50%;
  margin-top: ${base_X(2)};
`;
