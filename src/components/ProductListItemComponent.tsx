import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface propsInterface {
  productId: string;
  productName: string;
  productPrice: string;
  productAmount: string;
  productDesc: string;
  productImage: string;
  productBrand: string;
  productSize: string;
}

const ProductListItem: FC<propsInterface> = (props) => {
  const { productName, productPrice, productImage, productSize, productId } =
    props;

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledLink to={`/products/${productId}`}>
          <StyledImage src={productImage}></StyledImage>
        </StyledLink>
      </StyledImageContainer>
      <StyledDetailsContainer>
        <StyledTitle>{productName}</StyledTitle>
        <StyledDetail>{productSize}</StyledDetail>
        <StyledDetail>{`${productPrice} PLN`}</StyledDetail>
      </StyledDetailsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 35rem;
  width: 19rem;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid black;
  margin: 2rem;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;
`;

const StyledDetailsContainer = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  height: 30%;
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-rows: 18px 18px 18px;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-size: 0.8rem;
  display: inline-block;
  color: black;
  opacity: 1;
  text-decoration: none;
  transition: 0.5s ease;
  height: 100%;
  width: 100%;
  width: 100%;
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;
const StyledImageContainer = styled.div`
  padding: 1rem 1rem 0.5rem 1rem;
  position: relative;
  height: 70%;
  width: 100%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const StyledTitle = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 18px;
  margin: 0;
`;

const StyledDetail = styled.p`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 0.9rem;
  margin: 0;
  line-height: 18px;
`;

export default ProductListItem;
