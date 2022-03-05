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

export default HeroComponent;
