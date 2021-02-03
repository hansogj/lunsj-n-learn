import styled from 'styled-components';
import { color, ColorProps, compose, space, layout,  SpaceProps, typography, TypographyProps, LayoutProps } from 'styled-system';
import { pallet } from '../constants';
import { FlexContainer as FlexContainerImpl } from '../StyledComponents/style';
import { half } from '../StyledComponents/style.utils';

type SpaceColTypo = SpaceProps & TypographyProps & ColorProps;
const composed = compose(space, typography, color);

export const FlexContainer = styled(FlexContainerImpl)<SpaceColTypo & LayoutProps>(
  compose(space, typography, color, layout)
);

export const H1 = styled.h1<SpaceColTypo>(composed);

export const H2 = styled('h2')<SpaceColTypo>`
  ${composed}
  border-radius: ${half};
  box-shadow: ${half} ${half} ${half} ${pallet.dark};
`;
