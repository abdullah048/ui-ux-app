import * as React from 'react';
import styled from 'styled-components';
import peoples from '../../assets/people.png';
import AI from '../../assets/ai.png';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <HeaderContainer id='home'>
      <HeaderContent>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <HeaderContentInput>
          <input type='email' placeholder='Your Email Address' />
          <button> Get Started</button>
        </HeaderContentInput>

        <HeaderContentPeople>
          <img src={peoples} alt='peoples' />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </HeaderContentPeople>
      </HeaderContent>
        <HeaderImage>
          <img src={AI} alt='AI' />
        </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  padding: 4rem 6rem;
  display: flex;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    color: var(--color-text);
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 1050px) {
    margin: 0 0 3rem;
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 48px;
      line-height: 60px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 490px) {
    h1 {
      font-size: 36px;
      line-height: 48px;
    }

    p {
      font-size: 14px;
      line-height: 23px;
    }
  }
`;

const HeaderContentInput = styled.div`
  width: 100%;
  margin: 2rem 0 1rem;
  display: flex;

  input {
    flex: 2;
    background: var(--color-footer);
    border-radius: 5px 0px 0px 5px;
    width: 100%;
    min-height: 50px;
    border: 2px solid var(--color-footer);
    outline: none;
    font-weight: 400;
    padding: 0 1rem;
    font-size: 20px;
    line-height: 27px;
    color: #3d6184;
    ::placeholder {
      color: #3d6184;
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #3d6184;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #3d6184;
    }
  }

  button {
    flex: 0.6;
    width: 100%;
    padding: 0 1rem;
    min-height: 50px;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #fff;
    font-family: var(--font-family);
    background: #ff4820;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    outline: none;
    border: none;
  }

  @media screen and (max-width: 650px) {
    input,
    button {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 490px) {
    input,
    button {
      font-size: 12px;
      line-height: 16px;
    }

    button {
      flex: 1;
    }
  }
`;

const HeaderContentPeople = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;

  img {
    width: 181.79px;
    height: 38px;
  }

  p {
    margin: 0 0 0 1rem;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;

    p {
      margin: 0;
    }
  }
`;

const HeaderImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
