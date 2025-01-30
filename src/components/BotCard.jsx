import React from "react"; // Importing React 

// Defining a component named BotCard that receives two props.
function BotCard({ bot, enlistBot }) {
  /*
    - `bot`: An object containing details of an individual bot, such as id name bot_class avatar_url health damage and armor.
    - `enlistBot`: A function that is triggered when the bot card is clicked, allowing the bot to be addedinto the army.
  */

  return (
    <div
      style={{
        border: "1px solid #ccc", 
        padding: "10px", 
        margin: "10px", 
        width: "200px", 
        textAlign: "center",
      }}
      onClick={() => enlistBot(bot)} // Calls `enlistBot` with the bot object when the card is clicked
    >
      {/* Displaying the bot's avatar image with full width */}
      <img 
        src={bot.avatar_url} // Bot's avatar image source
        alt={bot.name} // Alternative text for accessibility
        style={{ width: "100%" }} // Ensures the image fills the card width
      />

      {/* Displaying the bot's name */}
      <h3>{bot.name}</h3>

      {/* Displaying additional bot stats */}
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
}

export default BotCard; 
