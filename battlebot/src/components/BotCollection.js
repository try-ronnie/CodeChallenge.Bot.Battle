// src/BotCollection.js
import React from "react";
import "./BotCollection.css";

function BotCollection({ bots, handleAddBot }) {
  return (
    <div className="section">
      <h2>All Bots</h2>
      <div className="bot-container">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="bot-card"
            onClick={() => handleAddBot(bot)} // ✅ add bot on click
          >
            <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
            <h3>{bot.name}</h3>
            <p>{bot.bot_class}</p>
            <p> {bot.health} | {bot.damage} |  {bot.armor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
