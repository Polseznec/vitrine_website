import React from "react";

//styled
import { StyledFooterContainer } from "../styles/Container.styled";

const FooterContainer = () => {
  return (
    <StyledFooterContainer>
      <h1>footer</h1>
      <br />
      <span>
        Contact Avec mon 06 Mon mail (j'en créerai un avec le nom du site) et un
        espace de dialogue où le client entrera ses coordonnées (prénom, nom,
        mail, tél, description (espace pour expliquer la demande). Puis un
        bouton pour « envoyer» vers ma boîte mail.
      </span>
    </StyledFooterContainer>
  );
};

export default FooterContainer;
