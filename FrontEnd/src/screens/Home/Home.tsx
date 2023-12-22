import { useHome, HomeProps } from "./useHome";
import React from "react";
import "./Home.css";
import logoEdf from "../../assets/Électricité_de_France_logo.svg.png";

const Home: React.FC<HomeProps> = (props) => {
  const {} = useHome(props);

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>
          <span className="home-title-red">Course </span>{" "}
          <span className="home-title-blue">watt</span>
        </h1>
      </div>
      <a href="/Tests" className="home-start-btn">
        Démarrer
      </a>

      <div className="home-context">
        <p>
          L'usage de l'energie electrique est aujourd'hui considère comme une
          source indispensable à la vie de l'homme.Cette source tant demandé est
          souvent gaspiller par certains utilisateur.Faute d'absence
          d'information sur l'utilisation des materiels electrique.C'est dans ce
          sens que nous voulons mettre en place un jeu de sensibilisation aux
          éco-geste qui a pour objectif d'enseigner les bonnes pratiques à
          adopter pour limiter la consommation d'energie et d'economiser de
          l'energie electrique.
        </p>

        <h2>En partenariat avec </h2>
        <img className="logoEDF" src={logoEdf} alt="logoEDF" />
      </div>
    </div>
  );
};

export default Home;
