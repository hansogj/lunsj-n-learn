import React from 'react';
import ListItems from '../StyledComponents/ListItems';
import { Container, FlexContainer, CenteredIllustration } from '../StyledComponents/style';
import bootstrap from './Illu/bootstrap.svg';
import fondations from './Illu/fondations.svg';
import woodFrameWork from './Illu/framework.jpg';
import materialize from './Illu/materialize.png';
import skeleton from './Illu/skeleton.jpg';
import { IconContainer, IconList } from './style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ListItemProps { src?: string; title?: string; style?: any }
const ListItem = ({ title, ...props }: ListItemProps) => (
  <div key={title}>
    {props.src && (
      <>
        <img {...{ alt: 'frameworks', ...props }} />
        <h4>{title}</h4>
      </>
    )}
    {!props.src && <h5>{title}</h5>}
  </div>
);

const Frameworks = (): JSX.Element => (
  <Container className="box">
    <h1>Frameqwirks</h1>
    <FlexContainer>
      <ListItems
        items={[
          'Forenkler utvilkingen - Prototyping',
          'Cross-browser støtte',
          'A11y',
          'React, Angular, Vue',
          '"Responsive design on a large scale"',
        ]}
      />
      <ListItems
        inverse
        items={[`"It all looks the same"`, 'Verbost', 'Debugging', 'Kompleksistet / Gutten i godtebutikken']}
      />
    </FlexContainer>

    <CenteredIllustration src={woodFrameWork} alt="woodFrameWork illustration" />
    <IconContainer>
      <IconList>
        {[
          { title: 'Bootstrap', src: bootstrap },
          { title: 'Fondations', src: fondations },
          { title: 'Materialize', src: materialize },
          { title: 'Skeleton', src: skeleton, style: { width: '140px' } },
        ].map(ListItem)}
      </IconList>

      <IconList>
        {['Bulma', 'UIkit', 'Semantic UI', 'Susy', 'Pure', 'Milligram', 'Tailwind CSS', 'Tacit']
          .map((title) => ({ title }))
          .map(ListItem)}
      </IconList>
    </IconContainer>
  </Container>
);

export default Frameworks;
