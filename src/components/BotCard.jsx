import React from "react";

function BotCard({ bot, enlistBot }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
      }}
      onClick={() => enlistBot(bot)}
    >
      <img src={bot.avatar_url} alt={bot.name} style={{ width: "100%" }} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
}

export default BotCard;