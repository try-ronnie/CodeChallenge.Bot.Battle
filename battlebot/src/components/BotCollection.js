import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";

function BotCollection({ bots }) {
  const [army, setArmy] = useState([]);

  function handleAddToArmy(bot) {
    // Add bot only if it's not already in the army
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  return (
    <div>
      <h2>All Bots</h2>
      <div className="bot-container">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="bot-card"
            onClick={() => handleAddToArmy(bot)}
          >
            <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
            <h3>{bot.name}</h3>
            <p>{bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
          </div>
        ))}
      </div>

      {/* ✅ Add the YourBotArmy component here */}
      <YourBotArmy army={army} setArmy={setArmy} />
    </div>
  );
}

export default BotCollection;
