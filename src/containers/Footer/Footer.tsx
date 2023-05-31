import * as React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg'

interface IFooterProps { }

const FooterLinksList = [
  { title: 'Links', subLinks: ["Overons", "Social Media", "Counters", "Contact"] },
  { title: 'Company', subLinks: ["Terms & Conditions", "Privacy Policy", "Contact"] },
  { title: 'Get in touch', subLinks: ["Crechterwoord K12 182 DK Alknjkcb", "085-132567", "info@payme.net"] }
]

const Footer: React.FunctionComponent<IFooterProps> = props => {
  return (
    <Container>
      <FooterHeadingContainer>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </FooterHeadingContainer>
      <FooterCallToActionButton>
        <p>Request Early Access</p>
      </FooterCallToActionButton>
      <FooterLinksContainer>
        <FooterLinksLogo>
          <img src={logo} alt="footer_logo" />
          <p>Crechterwoord K12 182 DK
            Alknjkcb, All Rights Reserved</p>
        </FooterLinksLogo>
        {FooterLinksList.map(footerLink => (
          <FooterLinksWrapper>
            <h4>{footerLink.title}</h4>
            {footerLink.subLinks.map(link => (
              <p>{link}</p>
            ))}
          </FooterLinksWrapper>
        ))}
      </FooterLinksContainer>
      <FooterCopyrightWrapper>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </FooterCopyrightWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
padding: 4rem 6rem;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: var(--color-footer);

@media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

const FooterHeadingContainer = styled.div`
text-align: center;
width: 100%;
margin-bottom: 3rem;

h1 {
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 72px;
  letter-spacing: -0.04em;
}

@media screen and (max-width:850px){
  h1 {
    font-size: 44px;
    line-height: 50px;
  }
}

@media screen and (max-width:550px){
  h1 {
    font-size: 34px;
    line-height: 42px;
  }
}

@media screen and (max-width:410px){
  h1 {
    font-size: 27px;
    line-height: 38px;
  }
}
`;

const FooterCallToActionButton = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10rem;
  cursor: pointer;

p {
  box-sizing: border-box;
  font-family: var(--font-family);
  font-size: 18px;
  line-height: 21px;
  word-spacing: 2px;
}

@media screen and (max-width:550px){
  p {
    font-size: 14px;
    line-height: 20px;
  }
}

`;

const FooterLinksContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-wrap: wrap;
width: 100%;
text-align: left;
max-width: 1358px;
`;

const FooterLinksLogo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;

  img {
    width: 118px;
    height: 30px;
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 14px;
  }
`;

const FooterLinksWrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;

h4 {
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 2rem;
}

p {
  font-family: var(--font-family);
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 1.5rem;
  cursor: pointer;
}

@media screen and (max-width:850px){
  width: 250px;
  margin: 1rem 0;
}

@media screen and (min-width:601px) and (max-width:691px){
  width: 200px;
  margin: 1rem 0;
}
`;

const FooterCopyrightWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  text-align: center;

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 14px;
  }
`;