import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { logInFunction, logOutFunction } from "../utils/utils";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";
import { useTypedSelector } from "../hooks/useTypeSelector";

type formProps = {
  type: string;
  value?: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

interface containerProps {
  logedIn: boolean;
}

interface formComponentInterface {
  formProps: formProps[];
}

const FormComponent: FC<formComponentInterface> = (
  props: formComponentInterface
) => {
  const { formProps } = props;

  const { email, password, confirmPassword } = useTypedSelector(
    (state) => state.emailInput
  );

  const { haveAccount } = useTypedSelector((state) => state.haveAccount);
  const { message } = useTypedSelector((state) => state.message);
  const { logedIn } = useTypedSelector((state) => state.logIn);

  const dispatch = useDispatch();
  const {
    changeHaveAccount,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleLogIn,
    handleSetUser,
    handleDeleteUser,
    handleSetMessage,
  } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledForm>
      <StyledHeader>
        {logedIn
          ? "Zalogowano"
          : haveAccount
          ? "Zaloguj się"
          : "Zarejestruj się"}
      </StyledHeader>
      <StyledInputsContainer logedIn={logedIn}>
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
      </StyledInputsContainer>
      <StyledMessageContainer logedIn={logedIn}>
        <StyledMessageText>{message}</StyledMessageText>
      </StyledMessageContainer>

      <StyledButton
        onClick={
          !logedIn
            ? (e) =>
                logInFunction(
                  e,
                  email,
                  password,
                  haveAccount ? "login" : "register",
                  handleLogIn,
                  handleSetUser,
                  changeHaveAccount,
                  handleEmailInput,
                  handlePasswordInput,
                  handleConfirmPasswordInput,
                  handleSetMessage,
                  confirmPassword
                )
            : (e) => logOutFunction(e, handleLogIn, handleDeleteUser)
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
  justify-content: space-around;
  flex-direction: column;
  width: 60%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledInputsContainer = styled.div<containerProps>`
  height: 50%;
  width: 100%;
  display: ${(props) => (props.logedIn ? "none" : "flex")};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
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

const StyledMessageContainer = styled.div<containerProps>`
  display: ${(props) => (props.logedIn ? "none" : "flex")};
`;

const StyledMessageText = styled.p`
  font-size: 1rem;
  letter-spacing: 0.2rem;
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

const StyledHeader = styled.h3`
  font-size: 25px;
  letter-spacing: 1.3px;
`;

export default FormComponent;
