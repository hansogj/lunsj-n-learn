import styled from 'styled-components';
import { pallet } from '../../constants';
import { base_X, double, size } from '../style.utils';

interface ListProps {
  inverse?: boolean;
}

export const ListIcon = styled.img<ListProps>`
  ${size(2)};
  margin-left: ${(props) => props.theme.marginLeft};
  margin-right: ${(props) => props.theme.marginRight};
`;

export const ListItem = styled.li<ListProps>`
  font-weight: 300;
  font-size: 1.5em;
  position: relative;
  padding-left: ${base_X(1)};
  color: ${(props) => props.theme.color};
  text-align: ${(props) => props.theme.textAlign};
`;

ListIcon.defaultProps = {
  theme: {
    marginRight: double,
    marginLeft: 0,
  },
};
ListItem.defaultProps = {
  theme: {
    color: pallet.green_light,
    textAlign: 'left',
  },
};

export const inverseTheme = {
  color: pallet.sass_pink,
  textAlign: 'right',
  marginRight: 0,
  marginLeft: double,
};

export const ListStyle = styled.ul`
  list-style: none;
  padding-left: 0;
`;
