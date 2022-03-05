import React, { FC } from "react";
import styled from "styled-components";

const MainHeaderComponent: FC = () => {
  return <StyledHeaderContainer>MainHeaderComponent</StyledHeaderContainer>;
};

const StyledHeaderContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MainHeaderComponent;
