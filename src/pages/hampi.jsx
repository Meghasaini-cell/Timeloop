import { useState, useRef } from "react";
function Hampi() {
  return (
    <main className="history-page hampi-page">
      <section className="history-hero hampi-hero">
        <div className="hampi-hero-content">
          <span className="hampi-eyebrow">
            TIMELOOP • ANCIENT INDIA
          </span>

          <p className="hampi-location">
            KARNATAKA, INDIA
          </p>

          <h1>
            Hampi
            <span> Where History Lives Forever</span>
          </h1>

          <p className="history-intro">
            Walk through the forgotten capital of the Vijayanagara
            Empire, where magnificent temples, giant boulders and
            timeless stories bring the past to life.
          </p>

          <a href="#hampi-history" className="history-button">
            Explore the Past <span>↗</span>
          </a>

          <div className="hampi-hero-footer">
            <span>14th–16th Century</span>
            <span>UNESCO World Heritage Site</span>
          </div>
        </div>

        <div className="hampi-scroll-indicator">
          SCROLL TO DISCOVER ↓
        </div>
      </section>

      <section id="hampi-history" className="history-content">
        <p className="hampi-eyebrow">A GLIMPSE INTO HISTORY</p>

        <h2>The Lost Glory of Vijayanagara</h2>

        <p>
          Hampi, located in Karnataka, was once the magnificent
          capital of the Vijayanagara Empire. Its ancient temples,
          royal structures and remarkable stone architecture reveal
          the grandeur of a historic Indian kingdom.
        </p>

        <div className="history-places">
          <article>
            <span>01 / TEMPLE</span>
            <h3>Virupaksha Temple</h3>
            <p>
              A sacred landmark celebrated for its towering
              architecture and enduring spiritual importance.
            </p>
          </article>

          <article>
            <span>02 / MONUMENT</span>
            <h3>The Stone Chariot</h3>
            <p>
              An iconic stone monument at the Vittala Temple
              complex, admired for its intricate craftsmanship.
            </p>
          </article>

          <article>
            <span>03 / ARCHITECTURE</span>
            <h3>Vittala Temple</h3>
            <p>
              Famous for its remarkable pillars and extraordinary
              Vijayanagara-era stonework.
            </p>
          </article>
        </div>
     

<section className="hampi-eras">
  <p className="hampi-eyebrow">THROUGH THE AGES</p>
  <h2>Hampi: Past &amp; Present</h2>
  <p className="eras-intro">
    Drag the slider to compare ancient Hampi with the ruins we see today.
  </p>

  <HampiSlider />
</section>


        <a href="/" className="history-button">
          ← Back to Home
        </a>
      </section>
    </main>
  );
}

function HampiSlider() {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = (event) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const value = ((event.clientX - rect.left) / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, value)));
  };

  return (
    <div
      ref={sliderRef}
      className="before-after-slider"
      style={{ "--position": `${position}%` }}
      onPointerDown={(event) => {
        dragging.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePosition(event);
      }}
      onPointerMove={(event) => {
        if (dragging.current) {
          updatePosition(event);
        }
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      <img
        className="slider-image slider-present"
        src="https://images.pexels.com/photos/27011317/pexels-photo-27011317.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Present-day Hampi ruins"
        draggable="false"
      />

      <div className="slider-past">
        <img
          className="slider-image"
          src="/images/hampi-past.jpg"
          alt="Illustrative reconstruction of ancient Hampi"
          draggable="false"
        />
      </div>

      <span className="slider-label label-past">
        PAST · AI RECONSTRUCTION
      </span>

      <span className="slider-label label-present">
        PRESENT · TODAY
      </span>

      <div className="slider-divider">
        <span>↔</span>
      </div>
    </div>
  );
}





export default Hampi;
