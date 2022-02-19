import React, { FC, ChangeEvent, MouseEvent } from "react";
import styled from "styled-components";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { logInFunction } from "../utils/utils";

type formProps = {
  type: string;
  value?: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

type logInFuncParamsProps = {
  handleLogIn: (e: MouseEvent<HTMLButtonElement>, payload: boolean) => void;
  emailValue: string;
  passwordValue: string;
  confirmPasswordValue?: string;
  logedIn: boolean;
};

interface formComponentInterface {
  formProps: formProps[];
  haveAccount: boolean;
  logInFuncParams: logInFuncParamsProps;
}

const FormComponent: FC<formComponentInterface> = (
  props: formComponentInterface
) => {
  const { formProps, haveAccount, logInFuncParams } = props;
  const {
    handleLogIn,
    emailValue,
    passwordValue,
    confirmPasswordValue,
    logedIn,
  } = logInFuncParams;
  return (
    <StyledForm>
      <StyledHeader>
        {haveAccount ? "Zaloguj się" : "Zarejestruj się"}
      </StyledHeader>
      {formProps.map((item, index) => {
        return (
          <StyledInputContainer key={index}>
            <StyledIconContainer>
              {item.type === "email" ? (
                <AiOutlineMail size="25px" />
              ) : (
                <AiFillLock size="25px" />
              )}
            </StyledIconContainer>
            <StyledInput
              onChange={item.handleInput}
              value={item.value}
              type={item.type}
            />
          </StyledInputContainer>
        );
      })}

      <StyledMessageContainer>
        <StyledMessageText>wprowadź dane</StyledMessageText>
      </StyledMessageContainer>

      <StyledButton
        onClick={(e) =>
          logInFunction(
            e,
            emailValue,
            passwordValue,
            handleLogIn,
            haveAccount ? "login" : "register",
            confirmPasswordValue
          )
        }
      >
        {logedIn ? "Wyloguj" : haveAccount ? "Zaloguj się" : "Zarejstruj się"}
      </StyledButton>
    </StyledForm>
  );
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

export default FormComponent;