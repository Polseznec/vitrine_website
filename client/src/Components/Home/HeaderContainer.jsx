import React from "react";

//styled
import {
  StyledHeaderContainer,
  Title,
} from "../styles/Home/HeaderContainer.styled";
import { HorizontalLine } from "../styles/Assets.styled";
import { HeaderTitle } from "../styles/Texts.styled";
import { Bottom } from "../styles/Position.styled";
import { Logo } from "../styles/Assets.styled";
import { Button } from "../Buttons";

//assets
import lili_logo from "../../assets/svg/logo_lili_circle_filled.svg";

const HeaderContainer = () => {
  return (
    <StyledHeaderContainer>
      <Title>
        <Logo src={lili_logo} />
        <br />
        <HeaderTitle>Vous fait les poches</HeaderTitle>

        <br />
        {/* <Button title={`Voir les articles`} style={{ marginTop: "100px" }} /> */}
      </Title>

      <Bottom style={{ position: "absolute" }}>
        <HorizontalLine height={"20px"} />
      </Bottom>
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
