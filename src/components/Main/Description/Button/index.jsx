import React from "react";
import panier from "../../../../assets/img/Panier.svg";

import "./style.scss";

const Button = () => {
  return (
    <div className="button">
      <img src={panier} alt="Icone panier" className="icon" />
      <button className="btn">
        <a
          href="https://www.distillerie-gessienne.fr/produit/birdie-box-livraison-europe/"
          target="_blank"
          rel="noreferrer"
        >
          Commander
        </a>
      </button>
    </div>
  );
};

export default Button;
