import { MouseEvent } from "react";
import { payloadType } from "../redux/reducers/userReducer";

export const logInFunction = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  callback: Function,
  url: string,
  setUser: (payload: payloadType) => void,
  confirmPassword?: string
) => {
  e.preventDefault();
  console.log("loginfunc");

  const user = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  fetch(`http://localhost:8080/api/v1/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    if (url === "login" && response.ok) {
      callback(e, true);
    }

    console.log(response.json());

    //return response.json();
  });
  // .then((data) => {
  //   setUser(data);
  // });
};

export const logOutFunction = (
  e: MouseEvent<HTMLButtonElement>,
  callback: Function
) => {
  e.preventDefault();
  console.log("XD");

  fetch(`http://localhost:8080/api/v1/logout`).then((response) => {
    if (response.ok) {
      callback(e, false);
    }
  });
};
