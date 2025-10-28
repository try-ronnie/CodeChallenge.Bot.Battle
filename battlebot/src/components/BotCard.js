function BotCard({ bot, onClick, onDelete }) {
return (
<div className="bot-card" onClick={onClick}>
<img src={bot.avatar_url} alt={bot.name} width="150" />
<h3>{bot.name}</h3>