import * as React from 'react';
import styled from 'styled-components';

interface IArticleProps {
  imageUrl: string;
  date: string;
  title: string;
  [key: string]: any;
}

interface StyledProps {
  main?: boolean;
}

const Article: React.FunctionComponent<IArticleProps> = props => {
  return (
    <Container main={props.main}>
      <ArticleImage>
        <img src={props.imageUrl} alt="article_image" />
      </ArticleImage>
      <ArticleContentContainer>
        <ArticleContentHeading>
          <DateContainer>{props.date}</DateContainer>
          <Heading main={props.main}>{props.title}</Heading>
        </ArticleContentHeading>
        <ArticleFooter>Read Full Article</ArticleFooter>
      </ArticleContentContainer>
    </Container>
  );
};

export default Article;

const Container = styled.div<StyledProps>`
width: 100%;
height: 100%;
background: var(--color-footer);
display: flex;
flex-direction: column;

@media screen and (max-width:1100px) {
  width:${props => props.main ? '48%':''};
}

@media screen and (max-width:800px) {
  width:${props => props.main ? '100%':''};
}
`
const ArticleImage = styled.div`
width: 100%;
height: 100%;
background: var(--color-footer);
img {
  width: 100%;
  height: 100%;
}
`
const ArticleContentContainer = styled.div`
padding: 32px 49px 26px 25px;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`
const ArticleContentHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateContainer = styled.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 11.649px;
line-height: 35px;
color: #FFFFFF;
`;
const Heading = styled.h3<StyledProps>`
font-family: var(--font-family);
font-weight: 800;
font-size: 25.11px;
line-height: 30px;
color: #FFFFFF;
cursor: pointer;
margin-bottom: ${props => props.main ? '' : '5rem'};

@media screen and (max-width:550px) {
  font-size: 18px;
  line-height: 25px;
}

@media screen and (max-width:1100px) {
  margin-bottom: 5rem;
  font-size: 20px;
  line-height: 25px;
}

@media screen and (max-width:800px) {
  margin-bottom: 5rem;
  font-size: 17px;
  line-height: 24px;
}
`;

const ArticleFooter = styled.p`
font-family: var(--font-family);
font-weight: 700;
font-size: 11.649px;
line-height: 35px;
color: #FFFFFF;
cursor: pointer;
`;