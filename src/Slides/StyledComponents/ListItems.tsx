import React from 'react';
import styled, { css } from 'styled-components';
import SystekLogo from '../../icons/systek.logo.png';
import { base_X, size } from './style.utils';
import './style.tsx';

export const ListStyle = styled.ul<{ inverse: boolean }>`
  list-style: none;
  padding-left: 0;
  li {
    font-weight: 300;
    font-size: 1.5em;
    position: relative;
    padding-left: ${base_X(1)};
    ${props => props.inverse ? css`text-align : right` : css`text-align : left`};
    
    img  {
      ${size(2)}
      ${(props) => (props.inverse ? css`margin-left: ${base_X(2)} ` : css`margin-right:${base_X(2)}`)};
    }
  }
`;

const ListItems = ({ items, inverse = false }: { items: string[]; inverse?: boolean }) => (
  <ListStyle inverse={inverse}>
    {items.map((item) => (
      <li key={`listitem_${item.slice(0, 3)}`}>
        {inverse && item}
        <img src={SystekLogo} alt="SystekLogo" />
        {!inverse && item}
      </li>
    ))}
  </ListStyle>
);

export default ListItems;
