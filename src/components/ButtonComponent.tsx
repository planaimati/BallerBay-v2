import React, { FC } from "react";
import styled from "styled-components";

interface buttonInterface {
  value: string;
}

const ButtonComponent: FC<buttonInterface> = (props) => {
  return <StyledButton>{props.value}</StyledButton>;
};

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

export default ButtonComponent;
