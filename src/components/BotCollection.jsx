import React from "react"; // Importing React 
import BotCard from "./BotCard"; // Importing the BotCard component to display individual bots

// Defining a functional component named BotCollection that receives two props: `bots` and `enlistBot`
function BotCollection({ bots, enlistBot }) {
  /*
    - `bots`: An array of bot objects, each containing properties like `id`, `name`, `bot_class`, `avatar_url`, `health`, `damage`, and `armor`.
    - `enlistBot`: A function that allows a bot to be added to the user's army when selected.
  */

  return (
    <div>
      {/* Title for the Bot Collection section */}
      <h2>Bot Collection</h2>

      {/* Container for bot cards, using flexbox to wrap them neatly */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Mapping through the `bots` array to generate BotCard components */}
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
          /*
            - Each bot is rendered using the BotCard component.
            - The `key` prop ensures efficient React rendering by uniquely identifying each bot.
            - The `bot` object is passed as a prop to display the bot's details.
            - The `enlistBot` function is passed down to allow interaction when a bot is selected.
          */
        ))}
      </div>
    </div>
  );
}

export default BotCollection; 