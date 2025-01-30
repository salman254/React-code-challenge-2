import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection"; 
import BotArmy from "./components/BotArmy"; 
import "./App.css"; 

function App() {
  // State to store all bots fetched from the backend
  const [bots, setBots] = useState([]); // Declaration of the bots state

  // State to store the bots enlisted by the user
  const [army, setArmy] = useState([]); // Initialize army as an empty array.

  // Fetch bots data from the backend API when the component mounts
  useEffect(() => {
    fetch("https://bots-si0g.onrender.com/bots")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setBots(data)) // Store bots in state
      .catch((error) => console.error("Error fetching bots:", error)); // Handle errors
  }, []); 

  // Function to enlist a bot into the army
  const enlistBot = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]); // Add bot to the army array
    }
  }; // If operator checks if the bot is not already enlisted, add it to the army

  // Function to release a bot from the army (without deleting it)
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id)); // b represents each individual botduring the iteration. b.id !== bot.id: checks whether the id of the current bot b is not equal to the id of the bot passed to the releaseBot function. Then if the IDs are same they are kept in the array and if they are different it will be removed(filtered out)
  };

  // Function to permanently remove a bot from the database and UI
  const dischargeBot = (bot) => {
    fetch(`https://bots-si0g.onrender.com/bots/${bot.id}`, { method: "DELETE" }) // Send DELETE request to delete the bot
      .then(() => {
        // Remove the bot from both the army and the main collection
        setArmy(army.filter((b) => b.id !== bot.id)); // The army array is filtered using the filter method to remove the bot from the army state. The filter creates a new array without the bot whose id matches bot.id.
        setBots(bots.filter((b) => b.id !== bot.id)); // Similarly, the bots array (likely representing the main collection of bots) is also filtered to remove the bot.

      })
      .catch((error) => console.error("Error discharging bot:", error)); // Handle errors
  };

  // Render the main UI with Bot Army and Bot Collection components
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      
      {/* Renders the user's enlisted bots with options to release or discharge */}
      <BotArmy 
        army={army} 
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot} 
      />

      {/* Renders all available bots with option to enlist */}
      <BotCollection 
        bots={bots} 
        enlistBot={enlistBot} 
      />
    </div>
  );
}

export default App;
