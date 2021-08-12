import React from "react";

function Card({ lang }) {
  return (
    <div className="lang_outer_card" key={lang.id}>
      <div className="lan_inner_card">
        <div className="card_front card">
          <h1>{lang.name1}</h1>
        </div>

        <div className="card_back card">
          <h1>{lang.name2}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
