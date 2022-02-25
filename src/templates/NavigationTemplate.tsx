import React, { FC } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";
const NavigationTemplate: FC = () => {
  let location = useLocation();
  const { admin } = useTypedSelector((state) => state.user);
  const { cart } = useTypedSelector((state) => state.cart);

  return (
    <StyledNavContainer>
      <StyledLeftSideContainer>
        <StyledLogoContainer>
          <LogoLink to="/">baller bay</LogoLink>
        </StyledLogoContainer>

        <StyledList>
          <StyledListItem>
            <StyledLink
              color={location.pathname === "/" ? "black" : "black"}
              to="/products"
            >
              Produkty
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              color={location.pathname === "/" ? "black" : "black"}
              to="/about"
            >
              O nas
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledLeftSideContainer>
      <StyledRightSideContainer>
        <StyledRightSideList>
          <StyledListItem>
            <StyledLink
              color={location.pathname === "/" ? "black" : "black"}
              to="/contact"
            >
              Kontakt
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={"/login"}>konto</StyledLink>
          </StyledListItem>
          {admin ? (
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "black" : "black"}
                to="/admin"
              >
                Admin panel
              </StyledLink>
            </StyledListItem>
          ) : null}
          <StyledListItem>
            <StyledLink to={"/cart"}>{`koszyk(${cart.length})`}</StyledLink>
          </StyledListItem>
        </StyledRightSideList>
      </StyledRightSideContainer>
    </StyledNavContainer>
  );
};

const StyledNavContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 5%;
  background-color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 17%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    height: 20%;
  }
`;

const StyledLeftSideContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledRightSideContainer = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
  padding: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 0;
  font-weight: 700;
  color: black;
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  width: 30%;
  height: 100%;
  text-transform: uppercase;
  text-decoration: none;
  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledRightSideList = styled(StyledList)`
  width: 40%;
  @media (max-width: 1024px) {
    width: 60%;
  }
`;

const StyledListItem = styled.li`
  text-align: center;
  @media (max-width: 500px) {
    padding: 5px;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0.07rem;
  text-decoration: none;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  @media (max-width: 500px) {
    letter-spacing: 0.3rem;
    font-size: 1rem;
  }
  &.active {
    font-weight: 700;
  }
`;

export default NavigationTemplate;
