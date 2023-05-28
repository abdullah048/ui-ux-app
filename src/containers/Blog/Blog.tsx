import * as React from 'react';
import styled from 'styled-components';
import {blog01,blog02,blog03,blog04,blog05} from '../../assets/import'
import { Article } from '../../components';

interface IBlogProps {}

const Blog: React.FunctionComponent<IBlogProps> = props => {
  return (
    <Container id='blog'>
      <BlogHeading>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </BlogHeading>
      <BlogWrapper>
        <Blog>
          <Article imageUrl={blog01} />
        </Blog>
        <BlogSecondary>
        <Article imageUrl={blog02} />
        <Article imageUrl={blog03} />
        <Article imageUrl={blog04} />
        <Article imageUrl={blog05} />
        </BlogSecondary>
      </BlogWrapper>
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  padding: 4rem 6rem;

  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

const BlogHeading = styled.div`
  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
  }
`;

const BlogWrapper = styled.div``
const BlogMain = styled.div``
const BlogSecondary = styled.div``