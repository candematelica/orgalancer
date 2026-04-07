import './Card.css'

export default function Card({ title, value, icon, color = 'blue', trend = null }) {
  return (
    <div className={`card card-${color}`}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <span className="card-title">{title}</span>
      </div>
      <div className="card-body">
        <p className="card-value">{value}</p>
        {trend && (
          <p className={`card-trend ${trend.positive ? 'positive' : 'negative'}`}>
            {trend.positive ? '📈' : '📉'} {trend.text}
          </p>
        )}
      </div>
    </div>
  )
}
