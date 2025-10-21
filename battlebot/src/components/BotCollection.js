import BotCard from "./BotCard";

function BotCollection({ bots, army, setArmy }) {
  function handleAddBot(bot) {
    // Only add if it's not already in the army
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  return (
    <div>
      <h2>All Bots</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => handleAddBot(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
