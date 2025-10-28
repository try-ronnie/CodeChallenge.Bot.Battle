function BotCard({ bot, onClick, onDelete }) {
return (
<div className="bot-card" onClick={onClick}>
<img src={bot.avatar_url} alt={bot.name} width="150" />
<h3>{bot.name}</h3>
<p>{bot.bot_class}</p>
<p>{bot.health} {bot.damage} {bot.armor}</p>
{onDelete && (
<button
onClick={(e) => {
e.stopPropagation();
onDelete(bot);
}}