import * as React from 'react';
import styled from 'styled-components';
import possibilityImage from '../../assets/possibility.png';

interface IPossibilityProps {}

const Possibility: React.FunctionComponent<IPossibilityProps> = props => {
  return (
    <Container id='possibility'>
      <PossibilityImage>
        <img src={possibilityImage} alt='possibility' />
      </PossibilityImage>
      <PossibilityContent>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </PossibilityContent>
    </Container>
  );
};

export default Possibility;

const Container = styled.div`
  padding: 4rem 6rem;
  display: flex;
  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }

  @media screen and (max-width:950px) {
  flex-direction:column;
}
`;

const PossibilityImage = styled.div`
display: flex;
flex: 1;
justify-content: flex-start;
align-items: center;
margin-right: 2rem;

img {
  width: 100%;
  height: 100%;
}
`;

const PossibilityContent = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;

h4 {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-text);
}

h4:last-child {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-subtext);
}

h1 {
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 34px;
  margin-top: 10px;
  line-height: 45px;
}

p {
  font-weight: 400;
font-size: 16px;
line-height: 30px;
font-family: var(--font-family);
color: var(--color-text);
margin-bottom: 31px;
margin-top: 23px;
}

@media screen and (max-width:950px){
  margin-top: 1rem;
}
`;
