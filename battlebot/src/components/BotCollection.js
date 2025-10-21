import React from "react";

function BotCollection({ bots }) {
  return (
    <div>
      {bots.length === 0 ? (
        <p>Loading bots...</p>
      ) : (
        bots.map((bot) => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>{bot.health}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BotCollection;
