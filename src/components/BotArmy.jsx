import React from "react";

function BotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {army.map((bot) => (
          <div
            key={bot.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img src={bot.avatar_url} alt={bot.name} style={{ width: "100%" }} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotArmy;