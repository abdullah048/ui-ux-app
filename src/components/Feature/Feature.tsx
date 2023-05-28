import * as React from 'react';
import styled from 'styled-components';

interface IFeatureProps {
  title: string;
  text: string;
}

const Feature: React.FunctionComponent<IFeatureProps> = props => {
  return (
    <FeatureContainer>
      <FeatureContainerTitle>
        <div />
        <h1>{props.title}</h1>
      </FeatureContainerTitle>
      <FeatureContainerText>
        <p>{props.text}</p>
      </FeatureContainerText>
    </FeatureContainer>
  );
};

export default Feature;

const FeatureContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: flex-start;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    margin: 1rem 0;
    flex-direction: column;
  }
`;

const FeatureContainerTitle = styled.div`
  flex: 1;
  max-width: 180px;
  margin-right: 2rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #fff;
  }

  div {
    width: 38px;
    height: 3px;
    background: var(--gradient-bar);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.25rem;
  }

  @media screen and (max-width: 550px) {
    h1 {
      font-size: 14px;
      line-height: 22px;
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    h1 {
      margin: 1rem 0;
      min-width: 100%;
    }
  }
`;

const FeatureContainerText = styled.div`
  flex: 2;
  max-width: 390px;
  display: flex;
  max-width: 700px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    font-family: var(--font-family);
    color: var(--color-text);
  }

  @media screen and (max-width: 550px) {
    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
