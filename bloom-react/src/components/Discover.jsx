export default function Discover() {
  return (
    <section>
      <div className="discover-wrap">
        <section className="discover">
          <div className="discover-left">
            <h2 className="discover-title">Discover the project in detail</h2>
            <div className="discover-bottom">
              <p className="discover-body">
                Explore floor plans, layouts, and key information about Bloom Living in our digital brochure,
                or take a virtual tour.
              </p>
              <div className="discover-ctas">
                <button className="btn btn-dark">
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 2v9M4 7l4 4 4-4M2 14h12"/>
                  </svg>
                  Download brochure
                </button>
                <button className="btn" style={{ background: 'white', color: 'var(--dark)', border: 'none' }}>
                  <img src="/icons/Iconcam.svg" alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }}/>
                  Virtual tour
                </button>
              </div>
            </div>
          </div>
          <div className="discover-right">
            <img src="/assets/Frame 271.svg" alt="Discover"/>
          </div>
        </section>
      </div>
    </section>
  )
}
