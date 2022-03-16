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
  setMessage: (payload: string) => void,
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
    credentials: "include",
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
      console.log(data);

      setUser(data);
      setMessage(data.msg);
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

export const deleteProduct = (id: string) => {
  fetch(`http://localhost:8000/api/v1/product/${id}`, {
    method: "DELETE",
    mode: "cors",
    credentials: "include",
  });
};

export const getSingleProduct = (id: string, edit: Function) => {
  fetch(`http://localhost:8000/api/v1/product/${id}`)
    .then((response) => response.json())
    .then((data) => edit(data.product));
};
