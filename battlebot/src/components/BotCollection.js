// src/BotCollection.js
import React from "react";
import "./BotCollection.css"; // we’ll create this next

function BotCollection({ bots }) {
  return (
    <div className="bot-container">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img
            src={bot.avatar_url}
            alt={bot.name}
            className="bot-image"
          />
          <h3 className="bot-name">{bot.name}</h3>
          <p className="bot-class">{bot.bot_class}</p>
          <p> Health: {bot.health}</p>
          <p> Damage: {bot.damage}</p>
          <p> Armor: {bot.armor}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
