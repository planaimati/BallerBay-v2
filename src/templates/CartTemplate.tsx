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
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    min-height: 80vh;
    width: 90%;
  }
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
