import * as React from 'react';
import styled from 'styled-components';
import { Feature } from '../../components';

interface IFeaturesProps {}

const featuresList = [
  {
    title: 'Improving end distrusts instantly ',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
  },
];

const Features: React.FunctionComponent<IFeaturesProps> = props => {
  return (
    <Container id='features'>
      <FeaturesHeading>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </FeaturesHeading>
      <FeaturesWrapper>
        {featuresList.map(features => (
          <Feature
            key={features.title}
            title={features.title}
            text={features.text}
          />
        ))}
      </FeaturesWrapper>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  padding: 4rem 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

const FeaturesHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  text-align: left;
  margin-right: 5rem;
  h1 {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    font-family: var(--font-family);
  }

  p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-subtext);
    margin-top: 2rem;
  }

  @media screen and (max-width: 990px) {
    margin: 0 0 2rem 0;
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 28px;
      line-height: 38px;
    }
  }
`;

const FeaturesWrapper = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
