
function Egypt() {
  return (
    <div className="history-page egypt-page">
      <section className="history-hero egypt-hero">
        <div className="egypt-hero-content">
          <p className="history-label">✦ CRADLE OF CIVILIZATION ✦</p>

          <h1>
            Discover
            <br />
            <span>Ancient Egypt</span>
          </h1>

          <p className="history-intro">
            Walk through the land of mighty pyramids, legendary
            pharaohs and timeless mysteries beside the River Nile.
          </p>

          <a href="#egypt-history" className="history-button">
            Explore the Ancient World <span>↓</span>
          </a>

          <div className="egypt-hero-stats">
            <div>
              <strong>5,000+</strong>
              <span>Years of History</span>
            </div>
            <div>
              <strong>Giza</strong>
              <span>Iconic Pyramids</span>
            </div>
            <div>
              <strong>Nile</strong>
              <span>River of Life</span>
            </div>
          </div>
        </div>

        <div className="egypt-hero-symbol" aria-hidden="true">
          <span>𓂀</span>
          <p>THE LAND OF PHARAOHS</p>
        </div>
      </section>

      <section id="egypt-history" className="history-content egypt-content">
        <p className="history-label">A LEGACY CARVED IN STONE</p>
        <h2>The Land of Pharaohs</h2>

        <p className="egypt-description">
          Along the banks of the Nile, one of the world's most
          remarkable civilizations flourished. Ancient Egypt left
          behind extraordinary monuments, hieroglyphic writing,
          monumental art and fascinating stories of its rulers.
        </p>
          
<div className="egypt-timeline">
  <p className="history-label">TRAVEL THROUGH THE AGES</p>
  <h2>Journey Through Time</h2>

  <div className="egypt-timeline-grid">
    <article>
      <span>c. 3100 BCE</span>
      <h3>The First Pharaohs</h3>
      <p>Upper and Lower Egypt unite, marking the beginning of dynastic Egypt.</p>
    </article>

    <article>
      <span>c. 2600 BCE</span>
      <h3>Age of Pyramids</h3>
      <p>Egypt builds monumental pyramids during the Old Kingdom.</p>
    </article>

    <article>
      <span>c. 1550 BCE</span>
      <h3>New Kingdom</h3>
      <p>Egypt expands its influence and builds magnificent temples.</p>
    </article>

    <article>
      <span>30 BCE</span>
      <h3>Roman Conquest</h3>
      <p>Egypt becomes a province of the Roman Empire after Cleopatra VII's reign.</p>
    </article>
  </div>
</div>

        <div className="egypt-section-heading">
          <div>
            <p className="history-label">TIMELESS WONDERS</p>
            <h2>Explore Famous Places</h2>
          </div>
          <span>03 HISTORIC GEMS</span>
        </div>

        <div className="history-places egypt-places">
          <article className="egypt-place-card">
            <div className="egypt-place-number">01</div>
            
<img
  className="egypt-place-image"
  src="https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=85"
  alt="Ancient Egyptian pyramids"
/>

            <p className="egypt-card-tag">ANCIENT WONDER</p>
            <h3>Great Pyramid of Giza</h3>
            <p>
              A monumental royal tomb and the only surviving
              wonder of the Seven Wonders of the Ancient World.
            </p>
            <span className="egypt-card-footer">GIZA PLATEAU ↗</span>
          </article>

          <article className="egypt-place-card">
            <div className="egypt-place-number">02</div>
            
<img
  className="egypt-place-image"
  src="https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=900&q=85"
  alt="Ancient Egyptian pyramids"
/>

            <p className="egypt-card-tag">GUARDIAN OF GIZA</p>
            <h3>The Great Sphinx</h3>
            <p>
              A colossal limestone statue with a human head
              and a lion's body, guarding the Giza plateau.
            </p>
            <span className="egypt-card-footer">GIZA PLATEAU ↗</span>
          </article>

          <article className="egypt-place-card">
            <div className="egypt-place-number">03</div>
            
<img
  className="egypt-place-image"
  src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=900&q=85"
  alt="Ancient Egyptian pyramids"
/>

            <p className="egypt-card-tag">SACRED ARCHITECTURE</p>
            <h3>Karnak Temple</h3>
            <p>
              A vast complex of temples, towering columns and
              sacred spaces developed over many centuries.
            </p>
            <span className="egypt-card-footer">LUXOR, EGYPT ↗</span>
          </article>
        </div>

        <div className="egypt-bottom-banner">
          <div>
            <p className="history-label">YOUR JOURNEY THROUGH TIME</p>
            <h2>History is waiting to be discovered.</h2>
          </div>
          <a href="/" className="history-button">
            ← Back to Home
          </a>
        </div>
      </section>
    </div>
  )
}

export default Egypt
