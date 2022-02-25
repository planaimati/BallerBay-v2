import React, { FC } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

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
              Products
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              color={location.pathname === "/" ? "black" : "black"}
              to="/about"
            >
              About
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
              Contact
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to={"/login"}>account</StyledLink>
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
            <StyledLink to={"/cart"}>{`bag(${cart.length})`}</StyledLink>
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
`;

const StyledLeftSideContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

const StyledRightSideContainer = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
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
  @media (max-width: 700px) {
    font-size: 2rem;
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
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRightSideList = styled(StyledList)`
  width: 40%;
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
