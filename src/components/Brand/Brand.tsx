import * as React from 'react';
import styled from 'styled-components';
import {
  google,
  shopify,
  slack,
  dropbox,
  atlassian,
} from '../../assets/import';
interface IBrandProps {}

const imgList = [
  {
    src: google,
    alt: 'google',
  },
  {
    src: shopify,
    alt: 'shopify',
  },
  {
    src: atlassian,
    alt: 'atlassian',
  },
  {
    src: dropbox,
    alt: 'dropbox',
  },
  {
    src: slack,
    alt: 'slack',
  },
];

const Brand: React.FunctionComponent<IBrandProps> = props => {
  return (
    <BrandContainer>
      {imgList.map(img => (
        <div key={img.alt}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </BrandContainer>
  );
};

export default Brand;

const BrandContainer = styled.div`
  padding: 4rem 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    flex: 1;
    max-width: 1050px;
    min-width: 120px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
