import React from "react";

//styled
import {
  StyledHeaderContainer,
  TitleHeaderContainer,
} from "../styles/Container.styled";
import { HorizontalLine } from "../styles/Assets.styled";
import { HeaderTitle } from "../styles/Texts.styled";
import { Bottom } from "../styles/Position.styled";
import { Logo } from "../styles/Assets.styled";
import { Button } from "../Buttons";

//assets
import lili_logo from "../../assets/svg/logo_lili_row.svg";

const HeaderContainer = () => {
  return (
    <StyledHeaderContainer>
      <TitleHeaderContainer>
        <Logo src={lili_logo} />
        <br />
        <HeaderTitle>Vous fait les poches</HeaderTitle>
        <span style={{ marginTop: "30px", fontSize: "20px" }}>
          Créatrice de poches et pochons uniques
        </span>
        <br />
        <Button
          title={`Voir les articles`}
          style={{ marginTop: "100px" }}
        ></Button>
      </TitleHeaderContainer>

      <Bottom style={{ position: "absolute" }}>
        <HorizontalLine height={"20px"} />
      </Bottom>
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
