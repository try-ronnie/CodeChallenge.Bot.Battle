 Bot Battlr

A React app where you can pick your favorite bots, build your own army, and manage them easily.  
The data comes from a local `db.json` served using JSON Server.

 Setup Instructions

1. Installed dependencies already come with npx create react app

2. Start JSON Server
   Make sure that when you start you run the dn.json server in the terminal:
     npx json-server --watch db.json --port 8001

3. Start the React App
   npm start in the terminal to get your browser to load THE CONTENT 

 How It Works
 App.js fetches all bot data and manages selected bots (your army).  
 BotCollection.js displays all bots fetched from the server.  
 YourBotArmy.js shows picked bots — you can remove or delete them.  
 BotCard.js displays individual bot details like image, health, armor, etc.
 Features

 Fetches bots from local API  
 Add or remove bots with one click  
 Delete bots permanently  
 Simple, clean UI using CSS


 Built With

React  
html css  
javascript
 Author
 
Built by **Ronnie Kiiru** for learning and practice.
