import React from "react";

//styled
import { StyledFooterContainer } from "../styles/Container.styled";
//functions
import { toCapitalize as TC } from "../fonctions";

const FooterContainer = () => {
  console.log("email", process.env.SELLER_EMAIL);
  return (
    <StyledFooterContainer>
      <p>{TC("Qui suis-je ?")}</p>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        {TC("Instagram")}
      </a>
      <a href={process.env.SELLER_EMAIL} target="_blank" rel="noreferrer">
        {TC("Envoyer moi un mail !")}
      </a>
    </StyledFooterContainer>
  );
};

export default FooterContainer;
