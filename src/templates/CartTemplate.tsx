import React from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import styled from "styled-components";
import CartItemComponent from "../components/CartItemComponent";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";

interface containerProps {
  empty: boolean;
}

const CartTemplate = () => {
  const { cart } = useTypedSelector((state) => state.cart);

  const finalPrice = cart.reduce(
    (accumulator, item) => accumulator + parseFloat(item.productPrice),
    0
  );

  let isEmpty = cart.length > 0 ? false : true;

  return (
    <StyledContainer>
      <StyledHeaderContainer empty={isEmpty}>
        <StyledHeader>koszyk</StyledHeader>
      </StyledHeaderContainer>
      <StyledContentContainer empty={isEmpty}>
        {cart.length > 0 ? (
          <>
            <StyledCartItemContainer>
              {cart.map((item) => (
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
              ))}
            </StyledCartItemContainer>
            <StyledSummaryContainer>
              <StyledSummary>
                <StyledInfo>Podsumowanie</StyledInfo>
                <StyledSummaryTextContainer>
                  <StyledInfo>Łączna cena</StyledInfo>
                  <StyledInfo>{`${finalPrice} PLN`}</StyledInfo>
                </StyledSummaryTextContainer>
                <StyledSummaryTextContainer>
                  <StyledInfo>Wysyłka</StyledInfo>
                  <StyledInfo>0PLN</StyledInfo>
                </StyledSummaryTextContainer>
                <StyledButton>do kasy</StyledButton>
              </StyledSummary>
            </StyledSummaryContainer>
          </>
        ) : (
          <>
            <StyledInfo>Twój koszyk jest pusty.</StyledInfo>
            <StyledLink to={`/products`}>
              <ButtonComponent value="Powrót do sklepu"></ButtonComponent>
            </StyledLink>
          </>
        )}
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 120vh;
  }
`;

const StyledHeaderContainer = styled.div<containerProps>`
  width: 100%;
  height: 10%;
  display: ${(props) => (props.empty ? "none" : "flex")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const StyledHeader = styled.h5`
  font-size: 1.3rem;
  font-weight: 300;
  text-transform: uppercase;
  padding-left: 1rem;
  margin: 0;
`;

const StyledContentContainer = styled.div<containerProps>`
  height: ${(props) => (props.empty ? "75%" : "100%")};
  width: 100%;
  flex-direction: ${(props) => (props.empty ? "column" : "row")};
  display: flex;
  align-items: ${(props) => (props.empty ? "center" : "flex-start")};
  justify-content: ${(props) => (props.empty ? "center" : "space-between")};
  padding: 0 1rem 0 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0;
  }
`;

const StyledCartItemContainer = styled.div`
  height: auto;
  width: 78%;
  border-top: 1px solid black;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSummaryContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    width: 70%;
    height: 50%;
  }
`;

const StyledSummary = styled.div`
  background-color: #d3d3d3;
  height: 30%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 40%;
  }
`;

const StyledSummaryTextContainer = styled.div`
  height: 10%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  width: 30%;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

const StyledInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;

const StyledButton = styled.button`
  background-color: #313131;
  box-shadow: -16px -15px 7px -15px rgba(156, 159, 187, 1);
  text-transform: uppercase;
  width: 100%;
  color: white;
  height: 4rem;
  letter-spacing: 0.8px;
  transition: 0.2s;
  border: none;
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default CartTemplate;
