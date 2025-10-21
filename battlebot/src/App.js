import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]); // all bots from server
  const [army, setArmy] = useState([]); // your selected bots

  // Fetch bots from the backend when app loads
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy army={army} setArmy={setArmy} />
      <BotCollection bots={bots} army={army} setArmy={setArmy} />
    </div>
  );
}

export default App;
