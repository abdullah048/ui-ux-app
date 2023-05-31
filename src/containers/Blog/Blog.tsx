import * as React from 'react';
import styled from 'styled-components';
import { blog01, blog02, blog03, blog04, blog05 } from '../../assets/import'
import { Article } from '../../components';

interface IBlogProps { }

const Blog: React.FunctionComponent<IBlogProps> = props => {
  return (
    <Container id='blog'>
      <BlogHeading>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </BlogHeading>
      <BlogWrapper>
        <BlogMain>
          <Article main imageUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
        </BlogMain>
        <BlogSecondary>
          <Article imageUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
          <Article imageUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
          <Article imageUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
          <Article imageUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us explore how it is?' />
        </BlogSecondary>
      </BlogWrapper>
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

const BlogHeading = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  text-align: left;
  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
  }

  @media screen and (max-width:700px) {
    h1 {
      font-size: 46px;
      line-height: 59px;
    }
  }

  @media screen and (max-width:550px) {
    h1 {
      font-size: 32px;
      line-height: 42px;
    }
  }
`;

const BlogWrapper = styled.div`
  display: flex;

  @media screen and (max-width:1100px) {
    flex-direction: column-reverse;
  }
`
const BlogMain = styled.div`
  flex: 0.75;
  margin-right: 2rem;

  @media screen and (max-width:1100px) {
    margin: 2rem 0;
  }
`
const BlogSecondary = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width:800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`