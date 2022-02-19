import React, { FC, MouseEvent } from "react";
import FormComponent from "./FormComponent";

interface loginPropsInterface {
  userHaveAccount: boolean;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogIn: (e: MouseEvent<HTMLButtonElement>, payload: boolean) => void;
  logedIn: boolean;
  emailValue: string;
  passwordValue: string;
  confirmPasswordValue?: string;
}

const LoginComponent: FC<loginPropsInterface> = (props) => {
  const {
    userHaveAccount,
    handleEmail,
    emailValue,
    passwordValue,
    handlePassword,
    confirmPasswordValue,
    handleConfirmPassword,
    handleLogIn,
    logedIn
  } = props;

  const logInFormProps = [
    { type: "email", value: emailValue, handleInput: handleEmail },
    { type: "password", value: passwordValue, handleInput: handlePassword },
  ];

  const registerFormProps = [
    { type: "email", value: emailValue, handleInput: handleEmail },
    { type: "password", value: passwordValue, handleInput: handlePassword },
    { type: "password", value: confirmPasswordValue, handleInput: handleConfirmPassword },
  ];

  const logInFunctionParams = {
    handleLogIn,
    emailValue,
    passwordValue,
    confirmPasswordValue,
    logedIn
  }

  if (userHaveAccount) {
    return <FormComponent formProps={logInFormProps} haveAccount={userHaveAccount} logInFuncParams={logInFunctionParams} />;
  } else {
    return <FormComponent formProps={registerFormProps} haveAccount={userHaveAccount} logInFuncParams={logInFunctionParams} />;
  }
};



export default LoginComponent;
