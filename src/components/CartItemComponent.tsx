import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";

interface cartItemPropsInterface {
  _id: string;
  productName: string;
  productPrice: string;
  productBrand: string;
  productAmount: string;
  productDesc: string;
  productImage: string;
  productSize: string;
}

const CartItemComponent: FC<cartItemPropsInterface> = (props) => {
  const {
    productName,
    productBrand,
    productPrice,
    productImage,
    productSize,
    _id,
  } = props;
  const dispatch = useDispatch();
  const { handleDeleteCart } = bindActionCreators(actionCreators, dispatch);
  return (
    <StyledContainer>
      <StyledImage src={productImage}></StyledImage>
      <StyledSmallContainer>
        <StyledHeader>{productName}</StyledHeader>
        <StyledText>{productBrand}</StyledText>
        <StyledText>{productSize}</StyledText>
        <StyledText>{productPrice}</StyledText>
        <StyledButton onClick={() => handleDeleteCart(_id)}>Usuń</StyledButton>
      </StyledSmallContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  min-height: 350px;
  @media (max-width: 700px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
    border-bottom: 1px solid black;
  }
`;

const StyledHeader = styled.h4``;

const StyledText = styled.p``;

const StyledImage = styled.img`
  width: 200px;
  max-height: 250px;
`;
const StyledButton = styled.button`
  background-color: #313131;
  color: white;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  letter-spacing: 0.8px;
  transition: 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const StyledSmallContainer = styled.div`
  text-transform: uppercase;
  max-width: 100%;
`;

export default CartItemComponent;
