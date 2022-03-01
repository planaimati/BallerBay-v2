import React, { FC } from "react";
import styled from "styled-components";

interface loginInfoProps {
  haveAccount: boolean | undefined;
  handleClick: () => void;
}

const LoginInfoComponent: FC<loginInfoProps> = (props) => {
  const { handleClick, haveAccount } = props;

  return (
    <StyledContainer>
      <StyledHeader>
        {!haveAccount ? "Posiadasz konto ?" : "Nie posiadasz jeszcze konta ?"}
      </StyledHeader>
      <StyledButton onClick={() => handleClick()}>
        {!haveAccount ? "Zaloguj się" : "Zarejestruj się"}
      </StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 80%;
  width: 40%;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledHeader = styled.h3`
  font-size: 25px;
  letter-spacing: 1.3px;
  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  color: #313131;
  text-transform: uppercase;
  width: 60%;
  height: 50px;
  letter-spacing: 0.8px;
  transition: 0.2s;
  border: 1px solid #313131;
  cursor: pointer;
`;

export default LoginInfoComponent;
