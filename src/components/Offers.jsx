const offers = [
  { icon: '/icons/Icon.svg', title: 'Privacy', body: 'Your personal space, essential and well-designed, ready to grow with you.' },
  { icon: '/icons/Vector-11.svg', title: 'Community', body: 'Shared spaces that create safety and belonging.' },
  { icon: '/icons/Vector-6.svg', title: 'Well-being', body: 'Ecovia do Rio Leça with green areas and outdoor spaces to relax, breathe, and reset.' },
  { icon: '/icons/Vector-13.svg', title: 'Proximity', body: 'Easy access to the key points of your daily routine.' },
  { icon: '/icons/Vector-14.svg', title: 'Convenience', body: 'Everything you need, right at your doorstep. Includes 7 commercial spaces on the ground floor.' },
]

export default function Offers() {
  return (
    <section className="offers">
      <div className="container">
        <h2 className="section-title">What Bloom Living <em>offers</em></h2>
        <p className="section-sub">Features designed to support a practical, balanced and efficient everyday life.</p>
        <div className="offers-grid">
          {offers.map(item => (
            <div className="offer-item" key={item.title}>
              <img className="offer-icon" src={item.icon} alt=""/>
              <h3 className="offer-title">{item.title}</h3>
              <p className="offer-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
