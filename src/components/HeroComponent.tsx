
import React, { FC } from "react";
import styled from "styled-components";

interface heroProps {
  image: string;
  title?: string;
}

interface HeroContainerProps {
  img: string;
}

const HeroComponent: FC<heroProps> = (props) => {
  const { image, title } = props;

  return (
    <StyledHeroContainer img={image}>
      <StyledBanner>
        <StyledTitle>{title}</StyledTitle>
      </StyledBanner>
    </StyledHeroContainer>
  );
};

const StyledHeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  color: white;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.img});
  background-size: cover;
  @media (max-width: 700px) {
    font-size: 2rem;
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
`

export default HeroComponent;
