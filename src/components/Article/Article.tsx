import * as React from 'react';
import styled from 'styled-components';

interface IArticleProps {
  imageUrl:string;
  // date
}

const Article: React.FunctionComponent<IArticleProps> = props => {
  return <Container>
    <ArticleImage>
      <img src={props.imageUrl} alt="article_image" />
    </ArticleImage>
  </Container>;
};

export default Article;

const Container = styled.div``
const ArticleImage = styled.div``