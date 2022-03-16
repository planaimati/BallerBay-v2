import React from "react";
import AdminPanelComponent from "../components/AdminPanelComponent";
import styled from "styled-components";


const AdminPanelTemplate = () => {
  

  return (
    <StyledContainer>
      <AdminPanelComponent  />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AdminPanelTemplate;
