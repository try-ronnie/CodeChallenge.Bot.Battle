import BotCard from "./BotCard";

function YourBotArmy({ army, setArmy }) {
  // Remove a bot from the army
  function handleRelease(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Delete bot permanently (from backend + army)
  function handleDischarge(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => setArmy(army.filter((b) => b.id !== bot.id)));
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => handleRelease(bot)}
            onDelete={() => handleDischarge(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
