export default function Card({ card, selectedStat, handleSelect }) {
  if (!card) return <div className="card back" />

  return (
    <div className="card">
      <img src={card.image} />
      <ul className="stat-list">
        {card.stats.map((stat, index) => 
          <li className={`stat-list-item${selectedStat === index ? ' selected' : ''}`} key={index} onClick={() => handleSelect && handleSelect(index)}>
            <span>{stat.name}</span>
            <span>{stat.value}</span>
          </li>
        )}
      </ul>
    </div>
  )
}