const cards = [
  {
    title: 'Energy performance',
    body: 'The building performs significantly above standard residential benchmarks, improving efficiency in heating, cooling and hot water production.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: 'Renewable energy',
    body: "A significant share of the building's energy consumption is supported by renewable sources, contributing to a more responsible and efficient home.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    title: 'Thermal comfort',
    body: 'Highly insulated facades and efficient window systems help maintain indoor comfort while reducing the need for climate control.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
        <line x1="9.5" y1="9" x2="13.5" y2="9"/>
        <line x1="15" y1="5" x2="20.2" y2="5"/>
        <line x1="15" y1="9" x2="17.6" y2="9"/>
        <line x1="15" y1="13" x2="20.2" y2="13"/>
        <line x1="15.92" y1="17" x2="17.92" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'Air quality and well-being',
    body: 'Natural ventilation and independent extraction systems help ensure healthier indoor environments throughout the apartments.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
      </svg>
    ),
  },
]

export default function Efficiency() {
  return (
    <section className="efficiency-orig" id="sustainability">
      <h2>Designed with efficiency <span>in mind</span></h2>
      <p>
        Bloom Living integrates energy-efficient solutions and responsible design to improve everyday comfort
        while reducing environmental impact.
      </p>
      <div className="cards-grid">
        {cards.map(card => (
          <div className="feat-card" key={card.title}>
            <div className="feat-icon">{card.icon}</div>
            <div className="feat-text">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
