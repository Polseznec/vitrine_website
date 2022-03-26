import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIdContext } from "../Components/AppContext";

import { ProductsContainer } from "../Components/Home/ProductsContainer";
import { Button } from "../Components/Buttons";

//styled
import { FullScreenContainer } from "../Components/styles/Container.styled";

function Home() {
  const UserId = React.useContext(UserIdContext);

  let navigate = useNavigate();

  const handleDashboard = () => {
    navigate("dashboard");
  };

  return (
    <FullScreenContainer>
      <h1>header</h1>
      <br />
      <span> ====> "title + pic"</span>
      <br />
      <h1>Qui suis-je? </h1>
      <br />
      <span>
        Avec un texte expliquant démarche, d'où proviennent les tissus, pourquoi
        les pièces sont uniques (tissus de créateurs ou de récup)… Nom de la
        boîte et son adresse (en cas de chèque)
      </span>
      <ProductsContainer />
      {UserId ? (
        <Button
          onClick={handleDashboard}
          style={style.btn_dashboard}
          title={"Dashboard"}
          bg={"#fff"}
        />
      ) : null}
      <h1>footer</h1>
      <br />
      <span>
        Contact Avec mon 06 Mon mail (j'en créerai un avec le nom du site) et un
        espace de dialogue où le client entrera ses coordonnées (prénom, nom,
        mail, tél, description (espace pour expliquer la demande). Puis un
        bouton pour « envoyer» vers ma boîte mail.
      </span>
    </FullScreenContainer>
  );
}

export default Home;

const style = {
  btn_dashboard: {
    position: "fixed",
    right: 0,
    bottom: 0,
    margin: 10,
  },
  footer: { bottom: "0" },
};
