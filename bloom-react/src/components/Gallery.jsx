export default function Gallery() {
  return (
    <section className="intention" id="gallery">
      <div className="container">
        <h2 className="section-title">Designed with <em>intention</em></h2>
        <p className="section-sub">
          Every apartment offers what is truly essential for modern living, complemented by shared spaces designed
          to bring people together, reduce costs, and create a complete, accessible home.
        </p>

        <div className="photo-grid">
          {/* Desktop: 3 colunas */}
          <div className="gallery-col gallery-col-side desktop-col">
            <div className="p1"><img src="/assets/gal/Frame 53.svg" alt="Yellow dining"/></div>
            <div className="p4"><img src="/assets/gal/Frame 61.svg" alt="Lounge"/></div>
            <div className="p7"><img src="/assets/gal/Frame 54.svg" alt="Living room"/></div>
          </div>

          <div className="gallery-col desktop-col">
            <div className="p2"><img src="/assets/gal/Frame 65.svg" alt="Building exterior"/></div>
            <div className="p5"><img src="/assets/gal/Frame 62.svg" alt="Bathroom"/></div>
            <div className="p8"><img src="/assets/gal/Frame 64.svg" alt="Bedroom"/></div>
          </div>

          <div className="gallery-col gallery-col-side desktop-col">
            <div className="p3"><img src="/assets/gal/Frame 66.svg" alt="Bikes storage"/></div>
            <div className="p6"><img src="/assets/gal/Frame 68.svg" alt="Corridor and dog"/></div>
            <div className="p9"><img src="/assets/gal/Frame 67.svg" alt="Laundry room"/></div>
          </div>

          {/* Mobile: 2 colunas flex independentes */}
          <div className="mob-col mob-col-left">
            <div><img src="/assets/gal/Frame 53.svg" alt="Yellow dining"/></div>
            <div><img src="/assets/gal/Frame 66.svg" alt="Bikes storage"/></div>
            <div><img src="/assets/gal/Frame 62.svg" alt="Lounge"/></div>
            <div><img src="/assets/gal/Frame 54.svg" alt="Living room"/></div>
            <div><img src="/assets/gal/Frame 67.svg" alt="Laundry room"/></div>
          </div>

          <div className="mob-col mob-col-right">
            <div><img src="/assets/gal/Frame 65.svg" alt="Building exterior"/></div>
            <div><img src="/assets/gal/Frame 61.svg" alt="Coworking"/></div>
            <div><img src="/assets/gal/Frame 68.svg" alt="Bathroom"/></div>
            <div><img src="/assets/gal/Frame 64.svg" alt="WE HOME"/></div>
          </div>
        </div>
      </div>
    </section>
  )
}
