const icons = [
  { src: '/icons/Vector-12.svg', text: 'Green areas and outdoor paths' },
  { src: '/icons/Vector-7.svg',  text: 'Local commerce and daily services' },
  { src: '/icons/Vector-8.svg',  text: 'Conveniently connected to metro and bus' },
  { src: '/icons/Vector-9.svg',  text: 'Near local schools' },
  { src: '/icons/Vector-10.svg', text: 'Short distances to work, leisure and city life' },
]

export default function Connected() {
  return (
    <section className="connected" id="map">
      <div className="connected-left">
        <h2 className="section-title">
          Connected to<br/><em>what matters</em>
        </h2>
        <p className="connected-body">
          Located in Quinta de Moreira, a prime area in Maia, Bloom Living offers everyday convenience and quick connections via the A41, with key destinations just minutes away.
        </p>
      </div>

      <div className="map-placeholder">
        <img src="/assets/image 7.svg" alt="Map"/>
      </div>

      <div className="connected-icons">
        {icons.map((item, i) => (
          <div className="ci-item" key={i}>
            <img className="ci-icon" src={item.src} alt=""/>
            <span className="ci-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
