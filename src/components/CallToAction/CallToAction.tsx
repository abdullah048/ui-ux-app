import * as React from 'react';
import styled from 'styled-components';

interface ICallToActionProps {}

const CallToAction: React.FunctionComponent<ICallToActionProps> = props => {
  return <Container>
    <CTAContent>
      <p>Request Early Access to Get Started</p>
      <h1>Register today & start exploring the endless possiblities.</h1>
    </CTAContent>
    <CTAContentAction>
    <button>Get Started</button>
    </CTAContentAction>
  </Container>;
};

export default CallToAction;

const Container = styled.div`
margin: 4rem;
padding: 2rem 4rem;
display:flex;
justify-content: space-between;
align-items: center;
max-width: 1170px;
background: var(--gradient-bar);
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10.7236px;

@media screen and (max-width:550px) {
  margin: 4rem 1rem;
  flex-direction: column;
  padding: 2rem;
}
`

const CTAContent = styled.div`
display: flex;
flex:3;
flex-direction: column;


h1 {
  font-weight: 800;
font-size: 24px;
line-height: 45px;
font-family: var(--font-family);
color: #000;
}

p {
  font-weight: 500;
font-size: 12px;
line-height: 30px;
font-family: var(--font-family);
color: #0E0E0E;
}

@media screen and (max-width:550px) {
  h1 {
    font-size: 18px;
    line-height: 32px;
  }
}
`

const CTAContentAction = styled.div`
display: flex;
flex:1;
justify-content: flex-end;

button {
  font-weight: 700;
font-size: 18px;
line-height: 30px;
font-family: var(--font-family);
color: #fff;
padding: 0.5rem 1.5rem;
/* width: 189.14px; */
/* height: 59.4px; */
background: #000000;
border-radius: 40px;
outline: none;
border: none;
cursor: pointer;
min-width: 150px;
}

@media screen and (max-width:550px) {
  margin: 2rem 0 0;
  button {
    font-size: 14px;
    line-height: 28px;
  }
}
`
