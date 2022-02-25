import React from "react";
import styled from "styled-components";
import LoginComponent from "../components/LoginComponent";
import LoginInfoComponent from "../components/LoginInfoComponent";
//redux
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/xd";
import { bindActionCreators } from "redux";
import { useTypedSelector } from "../hooks/useTypeSelector";

interface containerProps {
  logedIn: boolean;
}

const LoginTemplate = () => {
  const { email, password, confirmPassword } = useTypedSelector(
    (state) => state.emailInput
  );
  const { haveAccount } = useTypedSelector((state) => state.haveAccount);
  const { logedIn } = useTypedSelector((state) => state.logIn);


  const dispatch = useDispatch();
  const {
    changeHaveAccount,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleLogIn,
    handleSetUser,
    handleDeleteUser
  } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledContainer>
      <StyledFormContainer>
        <LoginComponent
          userHaveAccount={haveAccount}
          handleEmail={handleEmailInput}
          emailValue={email}
          passwordValue={password}
          handlePassword={handlePasswordInput}
          confirmPasswordValue={confirmPassword}
          handleConfirmPassword={handleConfirmPasswordInput}
          logedIn={logedIn}
          handleLogIn={handleLogIn}
          handleSetUser={handleSetUser}
          handleDeleteUser={handleDeleteUser}
        />
      </StyledFormContainer>
      <StyledRegistrationContainer logedIn={logedIn}>
        <LoginInfoComponent
          handleClick={changeHaveAccount}
          haveAccount={haveAccount}
        />
      </StyledRegistrationContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 40%;
`;

const StyledRegistrationContainer = styled.div<containerProps>`
  height: 20%;
  width: 100%;
  display: ${(props) => (props.logedIn ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  margin-top: 50px;
  border-top: 1px solid #d2d2d2;
  border-bottom: 1px solid #d2d2d2;
`;

export default LoginTemplate;
