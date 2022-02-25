import React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";

interface boldTextPropsInterface {
  fontSize: number;
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
          <StyledBoldText fontSize={2}>
            {singleProduct.productName}
          </StyledBoldText>
          <StyledText>{singleProduct.productBrand}</StyledText>
          <StyledText>{singleProduct.productSize}</StyledText>
          <StyledBoldText
            fontSize={1.3}
          >{`${singleProduct.productPrice} PLN`}</StyledBoldText>
          {!logedIn ? (
            <StyledLink to={"/login"}>Zaloguj się</StyledLink>
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
`;

const StyledImageContainer = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInfoContainer = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const StyledText = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
`;

const StyledBoldText = styled.p<boldTextPropsInterface>`
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  font-size: ${(props) => props.fontSize}rem;
`;

const StyledImage = styled.img`
  height: 80%;
  width: 80%;
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
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

export default SingleProductTemplate;
