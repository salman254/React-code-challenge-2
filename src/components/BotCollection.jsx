import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;