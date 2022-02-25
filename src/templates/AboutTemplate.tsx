import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const AboutTemplate = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <StyledImageContainer></StyledImageContainer>
        <StyledTextContainer>
          <StyledHeaderContainer>
            <StyledHeader>Kim jesteśmy?</StyledHeader>
          </StyledHeaderContainer>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            corrupti, hic quae laboriosam eveniet illo ipsum quaerat nobis nulla
            culpa! Sit molestias deserunt mollitia nulla rem architecto optio
            quia, asperiores amet adipisci quae eius? Vero beatae consequatur
            sapiente deleniti magnam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Alias, amet voluptates nam perferendis voluptate
            reprehenderit maiores nobis neque eveniet ad consectetur provident,
            exercitationem pariatur, soluta expedita.
          </StyledText>

          <StyledHeaderContainer>
            <StyledHeader>Dlaczego warto nam zaufać</StyledHeader>
          </StyledHeaderContainer>

          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ipsa fugit saepe, iusto assumenda magnam doloremque
            autem. Magnam iste maxime nesciunt perspiciatis ea. Ea numquam
            doloribus tenetur velit, nisi dignissimos? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, dolor voluptatem. Rem
            odit inventore incidunt ut aperiam? At adipisci voluptate accusamus
            minus ullam nostrum quibusdam, provident, minima autem quis porro.
          </StyledText>

          <StyledLine></StyledLine>

          <StyledSocialContainer>
            <StyledIconContainer>
              <StyledFacebook size="2rem"></StyledFacebook>
            </StyledIconContainer>
            <StyledIconContainer>
              <StyledInstagram size="2rem"></StyledInstagram>
            </StyledIconContainer>
          </StyledSocialContainer>
        </StyledTextContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 17vh;
`;

const StyledImageContainer = styled.div`
  height: 25rem;
  width: 100rem;
  background-image: url("https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1024px) {
    width: 90%;
    height: 25vw;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 100rem;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const StyledText = styled.p`
  color: black;
  font-size: 1.8rem;
  font-weight: 200;
  text-align: center;
  line-height: 2.8rem;
  letter-spacing: 0.1rem;
  word-wrap: break-word;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: justify;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledHeader = styled.h1`
  font-size: 2.5rem;
  color: #111111;
  font-weight: 300;
  letter-spacing: 0.3rem;
`;

const StyledLine = styled.div`
  height: 0.01rem;
  width: 60%;
  background-color: grey;
  margin: 4rem 0 4rem 0;
`;

const StyledInstagram = styled(FaInstagram)`
  color: black;
  size: 4rem;
`;
const StyledFacebook = styled(FaFacebookF)`
  color: black;
`;

const StyledSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40%;
  margin-bottom: 5rem;
`;

const StyledIconContainer = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 1rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export default AboutTemplate;
