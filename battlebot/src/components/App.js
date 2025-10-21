import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => {
        // 👇 If data is an object with a "bots" key, use that.
        if (Array.isArray(data)) {
          setBots(data);
        } else if (data.bots && Array.isArray(data.bots)) {
          setBots(data.bots);
        } else {
          console.error("Unexpected data format:", data);
          setBots([]); // fallback to empty
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>choose your warrior</h1>
      <BotCollection bots={bots} />
    </div>
  );
}

export default App;
