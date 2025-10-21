import React from "react";

function BotCollection({ bots }) {
  if (!Array.isArray(bots)) {
    return <p>Loading bots...</p>;
  }

  return (
    <div>
      {bots.length === 0 ? (
        <p>No bots found...</p>
      ) : (
        bots.map((bot) => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BotCollection;
