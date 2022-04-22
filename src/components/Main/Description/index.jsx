import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import fr from "../../../assets/img/FR.svg";
import gb from "../../../assets/img/GB.svg";
import sp from "../../../assets/img/SP.svg";
import Button from "./Button";

import "./style.scss";

const Description = () => {
  return (
    <div className="description">
      <Tabs>
        <TabList>
          <Tab>
            <img src={fr} alt="Drapeau français" className="flag" />
          </Tab>
          <Tab>
            <img src={gb} alt="Drapeau anglais" className="flag" />
          </Tab>
          <Tab>
            <img src={sp} alt="Drapeau espagnol" className="flag" />
          </Tab>
        </TabList>

        <TabPanel>
          <div className="section-one">
            <h2>
              -1 sous le par, Birdie... <br />
              Sors la flasque !
            </h2>

            <p>
              Cette phrase entre amateurs de golf <br />
              résonne comme une tradition.{" "}
            </p>

            <p>
              C’est pourquoi nous avons <br />
              décidé de créer la Birdie Box.{" "}
            </p>

            <p>Plus qu’une tradition, un concept !</p>

            <p>
              Remplissez votre fiole en fonction de votre humeur{" "}
              <br class="hide" />
              grâce aux liqueurs de la Distillerie Gessienne.
            </p>

            <p>Le cadeau indispensable à tout golfeur !</p>
          </div>

          <div className="section-two">
            <h2>La Birdie Box contient :</h2>
            <ul>
              <li>
                <span>•</span> 1 flasque inox
              </li>
              <li>
                <span>•</span> 4 verres inox
              </li>
              <li>
                <span>•</span> 1 bouteille de liqueur 20cl au choix
              </li>
              <li>
                <span>•</span> 3 balles de golf logotées Birdie Box
              </li>
              <li>
                <span>•</span> 10 tees Birdie Box
              </li>
              <li>
                <span>•</span> 1 relève pitch avec marqueur Birdie Box
              </li>
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="section-one">
            <h2>
              -1 under the par. Birdie...
              <br />
              Take out the birdie flask!
            </h2>

            <p>
              This phrase among golf enthusiasts <br />
              resonates like a tradition.
            </p>
            <p>This is why we decided to create the Birdie Box.</p>

            <p>
              Fill your flask according to your mood thanks <br class="hide" />
              to the liqueurs of the Distillerie Gessienne.
            </p>

            <p>The Essential gift for any golfer!</p>
          </div>

          <div className="section-two">
            <h2>The birdie box contains:</h2>
            <ul>
              <li>
                <span>•</span> 1 stainless steel flask
              </li>
              <li>
                <span>•</span> 4 stainless steel glasses
              </li>
              <li>
                <span>•</span> 1 bottle (20cl) of liqueur of your choice
              </li>
              <li>
                <span>•</span> 3 Birdie Box logo golf balls
              </li>
              <li>
                <span>•</span> 10 Birdie Box tees
              </li>
              <li>
                <span>•</span> 1 pitch mark repairer with Birdie Box Marker
              </li>
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="section-one">
            <h2>
              -1 bajo par. Birdie... <br />
              Saca la petaca !
            </h2>

            <p>
              Entre los amantes del golf, esta frase es toda una tradición por
              lo que hemos decidido crear la Birdie Box.
            </p>

            <p>Pero más que una tradición, es todo un concepto !</p>

            <p>
              Llene la petaca en función de su estado de ánimo{" "}
              <br class="hide" />
              con los licores de la Distillerie Gessienne.
            </p>

            <p>El regalo imprescindible para todo golfista !</p>
          </div>

          <div className="section-two">
            <h2>La Birdie Box contiene :</h2>
            <ul>
              <li>
                <span>•</span> 1 petaca inoxidable
              </li>
              <li>
                <span>•</span> 4 vasos inoxidables
              </li>
              <li>
                <span>•</span> 1 botella de licor de 20cl de su elección
              </li>
              <li>
                <span>•</span> 3 pelotas de golf con el logotipo Birdie Box
              </li>
              <li>
                <span>•</span> 10 camisetas Birdie Box
              </li>
              <li>
                <span>•</span> 1 disco de lanzamiento con marcador Birdie Box
              </li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
      <Button />
    </div>
  );
};

export default Description;
