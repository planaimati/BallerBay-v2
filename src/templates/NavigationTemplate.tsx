import React, { FC, useState } from "react";
import { BiMenu } from "react-icons/bi";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";

interface menuInterface {
  active?: boolean;
  admin?: boolean;
}

const NavigationTemplate: FC = () => {
  let location = useLocation();
  const { admin } = useTypedSelector((state) => state.user);
  const { cart } = useTypedSelector((state) => state.cart);

  console.log(admin);

  const [menu, setMemenu] = useState(false);

  const handleSetMenu = () => {
    setMemenu((prevState) => !prevState);
  };

  return (
    <StyledNavContainer>
      <StyledHamburgerContainer>
        <BiMenu onClick={handleSetMenu} />
      </StyledHamburgerContainer>

      <StyledLogoContainer>
        <LogoLink to="/" onClick={handleSetMenu}>
          baller bay
        </LogoLink>
      </StyledLogoContainer>

      <StyledListContainer active={menu}>
        <StyledList admin={admin}>
          <StyledListItem>
            <StyledLink
              onClick={handleSetMenu}
              color={location.pathname === "/" ? "black" : "black"}
              to="/products"
            >
              Produkty
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              onClick={handleSetMenu}
              color={location.pathname === "/" ? "black" : "black"}
              to="/about"
            >
              O nas
            </StyledLink>
          </StyledListItem>
          <StyledEmpty></StyledEmpty>
          <StyledListItem>
            <StyledLink
              onClick={handleSetMenu}
              color={location.pathname === "/" ? "black" : "black"}
              to="/contact"
            >
              Kontakt
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink onClick={handleSetMenu} to={"/login"}>
              konto
            </StyledLink>
          </StyledListItem>
          {admin ? (
            <StyledListItem>
              <StyledLink
                onClick={handleSetMenu}
                color={location.pathname === "/" ? "black" : "black"}
                to="/admin"
              >
                Admin panel
              </StyledLink>
            </StyledListItem>
          ) : null}
          <StyledListItem>
            <StyledLink
              onClick={handleSetMenu}
              to={"/cart"}
            >{`koszyk(${cart.length})`}</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledListContainer>
    </StyledNavContainer>
  );
};

const StyledNavContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  z-index: 2;
  background-color: white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 16rem;
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
const StyledListContainer = styled.div<menuInterface>`
  width: calc(100% - 16rem);
  height: 100%;
  background-color: white;
  display: flex;
  @media (max-width: 768px) {
    position: absolute;
    top: 5vh;
    left: 0;
    height: 100vh;
    width: 100%;
    display: ${(props) => (props.active ? "block" : "none")};
    background-color: #dcdcdc;
  }
`;

const StyledList = styled.ul<menuInterface>`
  padding: 0;
  display: grid;
  grid-template-columns: ${(props) =>
    props.admin
      ? "100px 100px 1fr 100px 100px 100px 100px"
      : "100px 100px 1fr 100px 100px 100px"};
  align-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  text-decoration: none;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${(props) =>
      props.admin
        ? "5rem 5rem 5rem 5rem 5rem 5rem"
        : "5rem 5rem 5rem 5rem 5rem"};
    align-items: center;
    justify-items: center;
  }
`;

const StyledListItem = styled.li`
  height: auto;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 5px;
    text-align: left;
    height: 5rem;
    border-bottom: 1px solid black;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0.07rem;
  text-decoration: none;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
  @media (max-width: 768px) {
    letter-spacing: 0.3rem;
    font-size: 1rem;
  }
  &.active {
    font-weight: 700;
  }
`;

const StyledEmpty = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

///mobile menu

const StyledHamburgerContainer = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  display: none;
  height: 5vh;
  width: 5vh;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default NavigationTemplate;
