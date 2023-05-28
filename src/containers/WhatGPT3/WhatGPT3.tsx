import * as React from 'react';
import styled from 'styled-components';
import { Feature } from '../../components';

interface IWhatGPT3Props {}

const WhatGPT3: React.FunctionComponent<IWhatGPT3Props> = props => {
  return (
    <GPT3Container id='wgpt3'>
      <GPT3Feature>
        <Feature
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
        />
      </GPT3Feature>
      <GPT3Heading>
        <h1 className='gradient__text'>
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </GPT3Heading>
      <GPT3Wrapper>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
        />
        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
        <Feature
          title='Education'
          text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
        />
      </GPT3Wrapper>
    </GPT3Container>
  );
};

export default WhatGPT3;

const GPT3Container = styled.div`
  margin: 4rem 6rem;
  padding: 2rem;
  background: var(--color-footer);
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  @media screen and (max-width:550px){
    margin: 4rem 1rem;
  }
`;

const GPT3Feature = styled.div`
  display: flex;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin-top: 0.5rem;
  }
`;

const GPT3Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 2rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    max-width: 510px;
  }

  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: var(--font-family);
    color: var(--color-subtext);
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0;
    p {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 650px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const GPT3Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media screen and (max-width: 350px) {
    margin: 1rem 0;
    min-width: 100%;
  }
`;
