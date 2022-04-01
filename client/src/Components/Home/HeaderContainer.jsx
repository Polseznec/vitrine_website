import React from "react";
//styled
import { StyledHeaderContainer } from "../styles/Container.styled";
import { HorizontalLine } from "../styles/Assets.stylted";
import { HeaderTitle } from "../styles/Texts.styled";
import { Bottom } from "../styles/Position.styled";

const HeaderContainer = () => {
  return (
    <StyledHeaderContainer>
      <HeaderTitle style={{ position: "absolute", bottom: "20px" }}>
        Lili vous fait les poches
      </HeaderTitle>
      <Bottom style={{ position: "absolute" }}>
        <HorizontalLine height={"20px"} />
      </Bottom>
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
