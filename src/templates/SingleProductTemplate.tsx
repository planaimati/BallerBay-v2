import React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";

interface boldTextPropsInterface {
  fontSize?: number;
  color?: string;
  weight?: number;
  left?: number;
}

const SingleProductTemplate = () => {
  const { id } = useParams();
  const { products } = useTypedSelector((state) => state.products);
  const { logedIn } = useTypedSelector((state) => state.logIn);

  const singleProduct = products.find((item) => item._id === id);

  const dispatch = useDispatch();
  const { handleSetCart } = bindActionCreators(actionCreators, dispatch);

  if (!singleProduct) {
    return (
      <StyledContainer>
        <p>Loading..</p>
      </StyledContainer>
    );
  } else {
    return (
      <StyledContainer>
        <StyledImageContainer>
          <StyledImage src={singleProduct.productImage} />
        </StyledImageContainer>
        <StyledInfoContainer>
          <StyledBoldTextContainer>
            <StyledBoldText fontSize={2}>
              {singleProduct.productBrand}
            </StyledBoldText>
            <StyledBoldText fontSize={1.2} weight={300}>
              {singleProduct.productName}
            </StyledBoldText>
          </StyledBoldTextContainer>

          <StyledBoldText
            fontSize={1.5}
          >{`${singleProduct.productPrice} PLN`}</StyledBoldText>
          <StyledColorInfoContainer>
            <StyledColorInfoSmallContainer left={0}>
              <StyledText fontSize={0.8} color="#727272">
                kolor
              </StyledText>
              <StyledText fontSize={1} color="black">
                czarny
              </StyledText>
            </StyledColorInfoSmallContainer>
            <StyledColorInfoSmallContainer left={1}>
              <StyledText fontSize={0.8} color="#727272">
                rozmiar
              </StyledText>
              <StyledText fontSize={1} color="black">
                {singleProduct.productSize}
              </StyledText>
            </StyledColorInfoSmallContainer>
          </StyledColorInfoContainer>
          {!logedIn ? (
            <StyledButtonContainer>
              <StyledLink to={"/login"}>Zaloguj się</StyledLink>
              <StyledText fontSize={1}>
                Zaloguj się aby dodać produkt do koszyka
              </StyledText>
            </StyledButtonContainer>
          ) : (
            <StyledButton onClick={() => handleSetCart(singleProduct)}>
              Dodaj do koszyka
            </StyledButton>
          )}
        </StyledInfoContainer>
      </StyledContainer>
    );
  }
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 150vh;
  }
`;

const StyledImageContainer = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 30%;
    width: 90%;
    
  }
`;

const StyledInfoContainer = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 80%;
    height: 30%;
    justify-content: space-around;
  }
`;

const StyledBoldTextContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledColorInfoContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledColorInfoSmallContainer = styled.div<boldTextPropsInterface>`
  display: flex;
  width: 45%;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid black; ;
`;

const StyledText = styled.p<boldTextPropsInterface>`
  text-transform: uppercase;
  font-size: ${(props) => props.fontSize}rem;
  text-align: center;
  font-weight: 200;
  color: ${(props) => props.color};
  margin: 0;
`;

const StyledBoldText = styled.p<boldTextPropsInterface>`
  font-weight: ${(props) => (props.weight ? props.weight : 700)};
  text-transform: uppercase;
  text-align: center;
  font-size: ${(props) => props.fontSize}rem;
  margin: 0;
  letter-spacing: 0.09;
`;

const StyledImage = styled.img`
  height: 80%;
  width: 80%;
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const StyledLink = styled(Link)`
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  letter-spacing: 0.8px;
  transition: 0.2s;
  border: none;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default SingleProductTemplate;
