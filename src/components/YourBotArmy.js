import React from "react";

function YourBotArmy({ army, handleRemoveBot }) {
  // Calculate total stats 
  const totalHealth = army.reduce((sum, b) => sum + b.health, 0);
  const totalDamage = army.reduce((sum, b) => sum + b.damage, 0);
  const totalArmor = army.reduce((sum, b) => sum + b.armor, 0);

  return (
    <div className="section army-section">
      <h2>Your Chosen Warriors</h2>

      {army.length === 0 ? (
        <p className="empty-text">No bots selected yet...</p>
      ) : (
        <>
          <div className="bot-container">
            {army.map((bot) => (
              <div
                key={bot.id}
                className="bot-card selected"
                onClick={() => handleRemoveBot(bot)}
              >
                <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
                <h3>{bot.name}</h3>
                <p className="bot-class">{bot.bot_class}</p>
                <div className="bot-stats">
                  <span> {bot.health}</span>
                  <span> {bot.damage}</span>
                  <span>{bot.armor}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="army-stats">
            <h4>Army Strength</h4>
            <div className="stat-row">
              <span>Total Health:</span> <strong>{totalHealth}</strong>
            </div>
            <div className="stat-row">
              <span>Total Damage:</span> <strong>{totalDamage}</strong>
            </div>
            <div className="stat-row">
              <span>Total Armor:</span> <strong>{totalArmor}</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default YourBotArmy;
