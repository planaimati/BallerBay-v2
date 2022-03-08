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
  const { productBrand, productPrice, productImage, productSize, _id } = props;
  const dispatch = useDispatch();
  const { handleDeleteCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={productImage}></StyledImage>
      </StyledImageContainer>

      <StyledSmallContainer>
        <StyledTextContainer>
          <StyledText>{productBrand}</StyledText>
          <StyledText>category</StyledText>
          <StyledText>{productSize}</StyledText>
          <StyledText>color</StyledText>
          <StyledText>PRODUKT DOSTĘPNY</StyledText>
        </StyledTextContainer>

        <StyledRemoveButtonContainer>
          <StyledRemoveButton onClick={() => handleDeleteCart(_id)}>
            X Usuń
          </StyledRemoveButton>
        </StyledRemoveButtonContainer>
      </StyledSmallContainer>
      <StyledSmallContainer>
        <StyledText>{`PLN ${productPrice}`}</StyledText>
      </StyledSmallContainer>
      <StyledSmallContainer>
        <StyledText>{`Ilość ${1}`}</StyledText>
      </StyledSmallContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  display: flex;
  align-items: space-around;
  justify-content: flex-start;
  width: 95%;
  margin: 0;
  margin-top: 1rem;
  @media (max-width: 700px) {
    font-size: 1rem;
    justify-content: space-around;
  }
`;
const StyledTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  height: 40%;
  width: 100%;
  flex-direction: column;
`;

const StyledText = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: capitalize;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

const StyledImageContainer = styled.div`
  width: 19rem;
  height: 29rem;

  @media (max-width: 700px) {
    width: 18rem;
  }
`;

const StyledRemoveButton = styled.button`
  font-size: 1.1rem;
  font-weight: 300;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const StyledRemoveButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding: 1rem;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

const StyledSmallContainer = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30%;
  height: 29rem;
  padding: 1rem;
  @media (max-width: 700px) {
    width: 15%;
    padding: 0;
  }
`;

export default CartItemComponent;
