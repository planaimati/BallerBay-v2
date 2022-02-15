import React, { FC } from "react";
import styled from "styled-components";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";

interface loginProps {
  userHaveAccount: boolean;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue: string;
  passwordValue: string;
  confirmPasswordValue?: string;
}

const LoginComponent: FC<loginProps> = (props) => {
  const {
    userHaveAccount,
    handleEmail,
    emailValue,
    passwordValue,
    handlePassword,
    confirmPasswordValue,
    handleConfirmPassword,
  } = props;

  if (userHaveAccount) {
    return (
      <StyledForm>
        <StyledHeader>Zaloguj się</StyledHeader>
        <StyledInputContainer>
          <StyledIconContainer>
            <AiOutlineMail size="25px" />
          </StyledIconContainer>
          <StyledInput onChange={(e) => handleEmail(e)} value={emailValue} type="email"/>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledIconContainer>
            <AiFillLock size="25px" />
          </StyledIconContainer>
          <StyledInput
            onChange={(e) => handlePassword(e)}
            value={passwordValue}
            type="password"
          />
        </StyledInputContainer>

        <StyledMessageContainer>
          <StyledMessageText>wprowadź dane</StyledMessageText>
        </StyledMessageContainer>

        <StyledButton>Zaloguj się</StyledButton>
      </StyledForm>
    );
  } else {
    return (
      <StyledForm>
        <StyledHeader>Utwórz konto</StyledHeader>
        <StyledInputContainer>
          <StyledIconContainer>
            <AiOutlineMail size="25px" />
          </StyledIconContainer>
          <StyledInput onChange={(e) => handleEmail(e)} value={emailValue} type="email"/>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledIconContainer>
            <AiFillLock size="25px" />
          </StyledIconContainer>
          <StyledInput
            onChange={(e) => handlePassword(e)}
            value={passwordValue}
            type="password"
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledIconContainer>
            <AiFillLock size="25px" />
          </StyledIconContainer>
          <StyledInput
            onChange={(e) => handleConfirmPassword(e)}
            value={confirmPasswordValue}
            type="password"
          />
        </StyledInputContainer>
        <StyledMessageContainer>
          <StyledMessageText>wprowadź dane</StyledMessageText>
        </StyledMessageContainer>

        <StyledButton>Utwórz konto</StyledButton>
      </StyledForm>
    );
  }
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 60%;
  height: 100%;
`;

const StyledInputContainer = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
`;

const StyledIconContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  border: 1px solid #dddddd;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 90%;
  border: 1px solid #dddddd;
`;

const StyledMessageContainer = styled.div``;

const StyledMessageText = styled.p``;

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

const StyledHeader = styled.h3`
  font-size: 25px;
  letter-spacing: 1.3px;
`;

export default LoginComponent;
