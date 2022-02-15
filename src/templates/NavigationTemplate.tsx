import React, { FC } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavigationTemplate: FC = () => {
  let location = useLocation();

  return (
    <Header
      color={
        location.pathname === "/" || location.pathname === "defaStyledListt"
          ? "white"
          : "black"
      }
    >
      <Navigation>
        <LogoLink to="/">
          <Logo color={location.pathname === "/" ? "white" : "black"}>
            baller bay
          </Logo>
        </LogoLink>

        <ShopIcon>
          <Link to="/cart"></Link>

          <ItemAmount
            color={location.pathname === "/" ? "white" : "black"}
          ></ItemAmount>
        </ShopIcon>

        <ListContainer>
          <StyledList>
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "white" : "black"}
                to="/"
              >
                Home
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "white" : "black"}
                to="/about"
              >
                O mnie
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "white" : "black"}
                to="/contact"
              >
                Kontakt
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "white" : "black"}
                to="/products"
              >
                Produkty
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "white" : "black"}
                to="/cart"
              >
                Koszyk
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink
                color={location.pathname === "/" ? "white" : "black"}
                to="/login"
              >
                Login
              </StyledLink>
            </StyledListItem>
          </StyledList>
        </ListContainer>
      </Navigation>
    </Header>
  );
};

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const ItemAmount = styled.p`
  color: white;
  margin: 0;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
`;

const ShopIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: 1;
  background: ${(props) => (props.color === "white" ? "transparent" : "white")};
`;

const Navigation = styled.nav`
  z-index: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  position: relative;
  margin-top: 10px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 500;
  color: ${(props) => (props.color === "white" ? "black" : "black")};
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledList = styled.ul`
  padding: 0;
  display: grid;
  list-style: none;
  margin: 0;
  grid-template-columns: 100px 100px 100px 100px 100px 100px;
  text-transform: uppercase;
  text-decoration: none;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StyledListItem = styled.li`
  text-align: center;
  @media (max-width: 500px) {
    padding: 5px;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 0.75rem;
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
