import React from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import styled from "styled-components";
import CartItemComponent from "../components/CartItemComponent";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";

const CartTemplate = () => {
  const { cart } = useTypedSelector((state) => state.cart);

  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledHeader>koszyk</StyledHeader>
      </StyledHeaderContainer>
      <StyledCartItemContainer></StyledCartItemContainer>
      <StyledSummaryContainer>
        <StyledSummary></StyledSummary>
      </StyledSummaryContainer>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartItemComponent
            key={item._id}
            _id={item._id}
            productAmount={item.productAmount}
            productBrand={item.productBrand}
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.productPrice}
            productSize={item.productSize}
            productDesc={item.productDesc}
          />
        ))
      ) : (
        <>
          <StyledInfo>Twój koszyk jest pusty.</StyledInfo>
          <StyledLink to={`/products`}>
            <ButtonComponent value="Powrót do sklepu"></ButtonComponent>
          </StyledLink>
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledHeader = styled.h5`
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-left: 5rem;
`;

const StyledCartItemContainer = styled.div``;

const StyledSummaryContainer = styled.div`
height: ;
width: ;
`;

const StyledSummary = styled.div`
  background-color: #d3d3d3;
  height: 30%;
  width: 100%;
`;

const StyledLink = styled(Link)`
  width: 30%;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

const StyledInfo = styled.p`
  font-size: 1rem;
  letter-spacing: 0.2rem;
`;

export default CartTemplate;
