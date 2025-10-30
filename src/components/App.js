// src/App.js
import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  //  Fetch bots from JSON server
  useEffect(() => {
    fetch("https://json-server-vercel-nine-orcin.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  //  Add bot to army
  function handleAddBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    } else {
      alert(`${bot.name} is already in your army!`);
    }
  }

  //  Remove bot from army
  function handleRemoveBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  return (
    <div className="App">
      <h1>Bot Battlr - war of the terminators</h1>
      <h2>YOU ARE REQUIRED TO PICK A BOT AND CREATE AN ARMY ACCORDING TO THE STATS YOU REQUIRE</h2>
      <h1>BY :CHUMBA TACK TICKS</h1>
      <YourBotArmy army={army} handleRemoveBot={handleRemoveBot} />
      <BotCollection bots={bots} handleAddBot={handleAddBot} />
    </div>
  );
}

export default App;
