
import React from "react";

function YourBotArmy({ army, handleRemoveBot }) {
  return (
    <div className="section">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="empty-text">No bots selected yet...</p>
      ) : (
        <div className="bot-container">
          {army.map((bot) => (
            <div
              key={bot.id}
              className="bot-card selected"
              onClick={() => handleRemoveBot(bot)} // ✅ remove on click
            >
              <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
              <h3>{bot.name}</h3>
              <p>{bot.bot_class}</p>
              <p> {bot.health}   {bot.damage}  {bot.armor}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
