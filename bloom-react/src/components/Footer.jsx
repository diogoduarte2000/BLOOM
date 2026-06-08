export default function Footer() {
  return (
    <footer className="footer-orig">
      <div className="footer-top-orig">
        <div className="footer-brand">
          <h2>Bloom Living</h2>
          <div className="footer-info">
            info@bloomliving.com<br/>
            +351 960 205 647<br/>
            +351 253 461 462<br/><br/>
            R. de Adelaide da Silva Pinto Aroso,<br/>
            4470-048 Moreira<br/>
            Portugal
          </div>
          <a href="#contact" className="footer-btn-orig">↗ Reserve now</a>
        </div>

        <div className="footer-cols-right">
          <div className="footer-col">
            <h4>Menu</h4>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#map">Map</a>
            <a href="#homes">Available homes</a>
            <a href="#sustainability">Sustainability</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-orig">
        <p>© Bloom Living, 2026</p>
        <div className="footer-legal-orig">
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="bottom-banner-orig">
        <div className="bottom-banner-overlay-orig">
          <img src="/assets/Frame 77.svg" alt="Banner"/>
        </div>
      </div>
    </footer>
  )
}
