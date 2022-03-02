import React, { FC } from "react";
import styled from "styled-components";

interface heroProps {
  image1?: string;
  image2?: string;
  title?: string;
}

interface imageContainerProps {
  img?: string;
}

const HeroComponent: FC<heroProps> = (props) => {
  const { image1, image2 } = props;

  return (
    <StyledHeroContainer>
      <StyledImage img={image1}></StyledImage>
      <StyledImage img={image2}></StyledImage>
    </StyledHeroContainer>
  );
};

const StyledHeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImage = styled.div<imageContainerProps>`
  height: 45vw;
  width: 49vw;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: 45vh;
    width: 90%;
  }
`;

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.p`
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 2px;
  color: white;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

export default HeroComponent;
