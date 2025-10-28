import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(res => res.json()) // ✅ make sure to call .json()
      .then((data) => {
        console.log("Bot data fetched:", data);
        setBots(data);
      })
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  return (
    <div className="App">
      <h1>Choose your warrior</h1>
      {bots.length > 0 ? (
        <BotCollection bots={bots} />
      ) : (
        <p>No bots found...</p>
      )}
    </div>
  );
}

export default App; 

