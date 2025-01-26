**Bot Battlr**
- Bot Battlr is a React-based web application where you can build your own bot army by enlisting bots from a collection. You can also release bots from your army or permanently discharge them.

**Features**
View Bot Collection: Browse through a list of available bots with details like name, class, health, damage, and armor.

Enlist Bots: Add bots to your army by clicking on them in the collection.

Release Bots: Remove bots from your army without deleting them permanently.

Discharge Bots: Permanently remove bots from both your army and the collection.

**Technologies Used**
React: A JavaScript library for building user interfaces.

JavaScript: Modern JavaScript for logic and functionality.

CSS: Basic styling for the application.

Fetch API: Used to fetch and delete bot data from a local server.

**Project Structure**
src/App.jsx: The main component that manages state and renders the application.

src/components/BotArmy.jsx: Displays the bots enlisted in your army.

src/components/BotCard.jsx: Represents a single bot card in the collection or army.

src/components/BotCollection.jsx: Displays the list of available bots.

db.json: Contains the bot data served by the JSON server.

public/: Contains static assets like images.

src/App.css: Contains styles for the application.