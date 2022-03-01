import { MouseEvent } from "react";
import { userPayloadType } from "../redux/action-types/action-types";

export const logInFunction = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  url: string,
  setLogin: Function,
  setUser: (payload: userPayloadType) => void,
  setHaveAccount: () => void,
  setLoginValue: (e: string) => void,
  setPasswordValue: (e: string) => void,
  setConfirmPasswordValue: (e: string) => void,
  confirmPassword?: string
) => {
  e.preventDefault();

  const user = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  fetch(`http://localhost:8000/api/v1/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (url === "login" && response.ok) {
        setLogin(e, true);
      }

      if (url === "register" && response.ok) {
        setHaveAccount();
      }

      setConfirmPasswordValue("");
      setLoginValue("");
      setPasswordValue("");

      return response.json();
    })
    .then((data) => {
      setUser(data);
    });
};

export const logOutFunction = (
  e: MouseEvent<HTMLButtonElement>,
  logout: Function,
  deleteUser: Function
) => {
  e.preventDefault();

  fetch(`http://localhost:8000/api/v1/logout`)
    .then((response) => {
      if (response.ok) {
        logout(e, false);
        deleteUser();
      }

      return response.json();
    })
    .then((data) => console.log(data));
};
