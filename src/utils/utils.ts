import { MouseEvent } from "react";

export const logInFunction = (
  e: MouseEvent<HTMLButtonElement>,
  email: string,
  password: string,
  callback: Function,
  url: string,
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
  });
};
