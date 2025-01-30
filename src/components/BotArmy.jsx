import React from "react"; // Importing React

// Defining BotArmy that takes three props: army, releaseBot, and dischargeBot
function BotArmy({ army, releaseBot, dischargeBot }) {
  /*
    - Army: An array of both bot objects, each containing properties like `id`, `name`, `bot_class`, and `avatar_url`.
    - ReleaseBot: A function that handles the removal of a bot from the army.
    - DischargeBot: A function that permanently removes a bot from the system.
  */

  return (
    <div>
      {/* Title for the Bot Army section */}
      <h2>Bot Army</h2>

      {/* Container div for displaying bot cards in a flexbox layout */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
        {/* Mapping through the `army` array to generate individual bot cards */}
        {army.map((bot) => (
          <div
            key={bot.id} // Assigning a unique key based on the bot's id to optimize React rendering
            style={{
              border: "1px solid #ccc", 
              padding: "10px", 
              margin: "10px", 
              width: "200px", 
              textAlign: "center", 
            }}
          >
            {/* Displaying the bot's avatar image with full width */}
            <img 
              src={bot.avatar_url} // Bot's avatar URL
              alt={bot.name} // Alternative text in case the image fails to load
              style={{ width: "100%" }} // Ensures the image fits the card width
            />
            
            {/* Displaying the bot's name in a heading */}
            <h3>{bot.name}</h3>
            
            {/* Displaying the bot's class as a paragraph */}
            <p>Class: {bot.bot_class}</p>
            
            {/* Button to release the bot back into the general pool */}
            <button onClick={() => releaseBot(bot)}>Release</button>
            
            {/* Button to permanently remove the bot */}
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotArmy;
