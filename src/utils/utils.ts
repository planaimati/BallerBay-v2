import { MouseEvent } from "react";
import { userPayloadType } from "../redux/action-types/action-types";

export const logInFunction = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  callback: Function,
  url: string,
  setUser: (payload: userPayloadType) => void,
  confirmPassword?: string
) => {
  e.preventDefault();

  const user = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  fetch(`https://ballerbay-api.herokuapp.com/api/v1/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (url === "login" && response.ok) {
        callback(e, true);
      }

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

  fetch(`https://ballerbay-api.herokuapp.com/api/v1/logout`).then(
    (response) => {
      if (response.ok) {
        logout(e, false);
        deleteUser();
      }
    }
  );
};
