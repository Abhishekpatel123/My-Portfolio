import React from "react";
import { Fade } from "react-reveal";

function Card({ lang }) {
  return (
    <Fade right>
      <div className="lang_outer_card" key={lang.id}>
        <div className="lan_inner_card">
          <div className="card_front card">
            <h3>{lang.name1}</h3>
          </div>

          <div className="card_back card">
            <h3>{lang.name2}</h3>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Card;
