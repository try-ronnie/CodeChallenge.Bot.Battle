import { useEffect, useState } from "react";
import BotCollection from "./BotCollection";

function App() {
  const [bots, setBots] = useState([]); // always starts as an empty array

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => {
        // check if data has bots inside or not
        if (data.bots) {
          setBots(data.bots);
        } else {
          setBots(data);
        }
      })
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  return (
    <div>
      <h1>My Bot Army</h1>
      <BotCollection bots={bots} />
    </div>
  );
}

export default App;
