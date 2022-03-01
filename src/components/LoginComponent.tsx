import React, { FC} from "react";
import FormComponent from "./FormComponent";

interface loginPropsInterface {
  userHaveAccount: boolean;
  emailValue: string;
  passwordValue: string;
  confirmPasswordValue?: string;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    
  } = props;

  const logInFormProps = [
    { type: "email", value: emailValue, handleInput: handleEmail },
    { type: "password", value: passwordValue, handleInput: handlePassword },
  ];

  const registerFormProps = [
    { type: "email", value: emailValue, handleInput: handleEmail },
    { type: "password", value: passwordValue, handleInput: handlePassword },
    {
      type: "password",
      value: confirmPasswordValue,
      handleInput: handleConfirmPassword,
    },
  ];


  if (userHaveAccount) {
    return (
      <FormComponent
        formProps={logInFormProps}
        
        
      />
    );
  } else {
    return (
      <FormComponent
        formProps={registerFormProps}
       
        
      />
    );
  }
};

export default LoginComponent;
