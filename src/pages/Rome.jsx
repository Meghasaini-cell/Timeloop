
function Rome() {
  return (
    <div className="history-page rome-page">
      <section className="history-hero rome-hero">
        <div className="rome-hero-content">
          <p className="history-label">✦ THE AGE OF EMPIRES ✦</p>

          <h1>
            Discover
            <br />
            <span>The Roman Empire</span>
          </h1>

          <p className="history-intro">
            Enter a world of powerful emperors, legendary gladiators,
            monumental architecture and an empire that shaped history.
          </p>

          <a href="#rome-history" className="history-button">
            Explore Ancient Rome <span>↓</span>
          </a>

          <div className="rome-hero-stats">
            <div>
              <strong>27 BCE</strong>
              <span>Empire Begins</span>
            </div>
            <div>
              <strong>Colosseum</strong>
              <span>Iconic Monument</span>
            </div>
            <div>
              <strong>476 CE</strong>
              <span>Western Empire Ends</span>
            </div>
          </div>
        </div>

        <div className="rome-hero-symbol" aria-hidden="true">
          <span>SPQR</span>
          <p>SENATUS POPULUSQUE ROMANUS</p>
        </div>
      </section>

      <section id="rome-history" className="history-content rome-content">
        <p className="history-label">A LEGACY THAT BUILT THE WORLD</p>
        <h2>The Glory of Rome</h2>

        <p className="rome-description">
          From an expanding Mediterranean power to one of history's
          most influential empires, Rome transformed architecture,
          engineering, law and urban life. Its roads, monuments and
          ideas continue to inspire the modern world.
        </p>
          
<div className="rome-timeline">
  <p className="history-label">TRAVEL THROUGH THE AGES</p>
  <h2>The Rise and Fall of Rome</h2>

  <div className="rome-timeline-grid">
    <article>
      <span>753 BCE</span>
      <h3>Birth of Rome</h3>
      <p>According to Roman tradition, the city of Rome was founded by Romulus.</p>
    </article>

    <article>
      <span>27 BCE</span>
      <h3>The Empire Begins</h3>
      <p>Augustus becomes the first Roman emperor, beginning the imperial era.</p>
    </article>

    <article>
      <span>117 CE</span>
      <h3>Peak of Expansion</h3>
      <p>Under Emperor Trajan, the empire reaches its greatest territorial extent.</p>
    </article>

    <article>
      <span>476 CE</span>
      <h3>Western Empire Falls</h3>
      <p>The last Western Roman emperor is deposed, marking a major historical turning point.</p>
    </article>
  </div>
</div>

        <div className="rome-section-heading">
          <div>
            <p className="history-label">MONUMENTS OF AN EMPIRE</p>
            <h2>Explore Famous Places</h2>
          </div>
          <span>03 HISTORIC LANDMARKS</span>
        </div>

        <div className="history-places rome-places">
          <article className="rome-place-card">
            <img
              className="rome-place-image"
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=85"
              alt="The Colosseum in Rome"
            />
            <div className="rome-place-number">01</div>
            <div className="rome-place-info">
              <p className="rome-card-tag">ICON OF ANCIENT ROME</p>
              <h3>The Colosseum</h3>
              <p>
                A magnificent amphitheatre where public spectacles
                brought thousands of spectators together.
              </p>
              <span className="rome-card-footer">ROME, ITALY ↗</span>
            </div>
          </article>

          <article className="rome-place-card">
            <img
              className="rome-place-image"
              src="https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=900&q=85"
              alt="Ancient Roman ruins"
            />
            <div className="rome-place-number">02</div>
            <div className="rome-place-info">
              <p className="rome-card-tag">HEART OF PUBLIC LIFE</p>
              <h3>The Roman Forum</h3>
              <p>
                A historic centre for political debates, religious
                ceremonies, trade and everyday Roman life.
              </p>
              <span className="rome-card-footer">ARCHAEOLOGICAL DISTRICT ↗</span>
            </div>
          </article>

          <article className="rome-place-card">
            <img
              className="rome-place-image"
              src="https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=85"
              alt="Historic architecture in Rome"
            />
            <div className="rome-place-number">03</div>
            <div className="rome-place-info">
              <p className="rome-card-tag">ENGINEERING MASTERPIECE</p>
              <h3>The Pantheon</h3>
              <p>
                An extraordinary ancient building celebrated for
                its vast dome and central circular opening.
              </p>
              <span className="rome-card-footer">HISTORIC ROME ↗</span>
            </div>
          </article>
        </div>

        <div className="rome-bottom-banner">
          <div>
            <p className="history-label">YOUR JOURNEY THROUGH TIME</p>
            <h2>All roads lead to Rome.</h2>
            <p>Discover the stories behind an extraordinary empire.</p>
          </div>
          <a href="/" className="history-button">
            ← Back to Home
          </a>
        </div>
      </section>
    </div>
  )
}

export default Rome
