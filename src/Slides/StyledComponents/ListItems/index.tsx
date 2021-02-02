import React from 'react';
import { ThemeProvider } from 'styled-components';
import SystekLogo from '../../../icons/systek.logo.png';
import { inverseTheme, ListIcon, ListItem, ListStyle } from './style';

const uniq = (item: string) => `listitem_${item.slice(0, 13)}`;

interface ListItemProps {
  item: string;
}

const InverseListItem = ({ item }: ListItemProps): JSX.Element => (
  <ThemeProvider theme={inverseTheme}>
    <ListItem>
      {item}
      <ListIcon src={SystekLogo} alt="SystekLogo" />
    </ListItem>
  </ThemeProvider>
);

const RegularListItem = ({ item }: ListItemProps): JSX.Element => (
  <ListItem>
    <ListIcon src={SystekLogo} alt="SystekLogo" />
    {item}
  </ListItem>
);

const ListItems = ({ items, inverse = false }: { items: string[]; inverse?: boolean }): JSX.Element => (
  <ListStyle>
    {items.map((item) =>
      inverse ? <InverseListItem key={uniq(item)} item={item} /> : <RegularListItem key={uniq(item)} item={item} />
    )}
  </ListStyle>
);

export default ListItems;
