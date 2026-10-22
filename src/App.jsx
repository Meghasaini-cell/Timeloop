
import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [showHampi, setShowHampi] = useState(false)
  const [showEgypt, setShowEgypt] = useState(false)
  const [showRome, setShowRome] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
const [chatHistory, setChatHistory] = useState([])

const sendMessage = () => {
  const question = chatMessage.trim().toLowerCase()

  if (!question) return

  let answer = ''

  if (question.includes('hampi')) {
    answer =
      'Hampi, Karnataka mein sthit hai. 🏛️ It was the capital of the Vijayanagara Empire and is famous for its ancient temples and stone chariot.'
  } else if (
    question.includes('egypt') ||
    question.includes('pyramid') ||
    question.includes('pharaoh')
  ) {
    answer =
      'Ancient Egypt was famous for its pyramids, pharaohs, hieroglyphics, and the Nile River. The Pyramids of Giza are among its most famous monuments. 🔺'
  } else if (
    question.includes('rome') ||
    question.includes('roman')
  ) {
    answer =
      'The Roman Empire was known for its roads, aqueducts, laws, and grand monuments such as the Colosseum. 🏛️'
  } else if (
    question.includes('hello') ||
    question.includes('hi')
  ) {
    answer =
      'Hello! 👋 Welcome to TIMELOOP. Ask me about Hampi, Ancient Egypt, or the Roman Empire.'
  } else {
    answer =
      'That is an interesting history question! Currently, I can answer basic questions about Hampi, Ancient Egypt, and the Roman Empire. Try asking about one of these topics. ⌛'
  }

  setChatHistory((previous) => [
    ...previous,
    { role: 'user', text: chatMessage.trim() },
    { role: 'ai', text: answer },
  ])

  setChatMessage('')
}


  return (
  <>
    <button
      className="chat-toggle"
      onClick={() => setChatOpen(!chatOpen)}
    >
      💬 Ask History AI
    </button>
    {chatOpen && (
  <div className="chat-box">
    
<div className="chat-header">
  <h3>⌛ History AI</h3>

  <div>
    <button
      onClick={() => setChatHistory([])}
      title="Clear conversation"
    >
      🗑️
    </button>

    <button onClick={() => setChatOpen(false)}>
      ✕
    </button>
  </div>
</div>


    
<div className="chat-body">
  <p>Hi! 👋 Ask me anything about history.</p>
  <p>Try asking about Hampi, Egypt, or Rome!</p>

  {chatHistory.map((message, index) => (
    <div
      key={index}
      className={message.role === 'user' ? 'user-message' : 'ai-message'}
    >
      {message.text}
    </div>
  ))}
</div>


    
<div className="chat-input">
  <input
    value={chatMessage}
    onChange={(e) => setChatMessage(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') sendMessage()
    }}
    placeholder="Ask about history..."
  />
  <button onClick={sendMessage}>➤</button>
</div>

  </div>
)}
    <div className="app">
      <nav className="navbar">
        <h2>◈ TIMELOOP</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#about">About</a>
        </div>
        <a href="#explore">Start Exploring ↗</a>
      </nav>

      <section className="hero" id="home">
        <div>
          <p>✦ HISTORY, REIMAGINED</p>
          <h1>
            The past is
            <br />
            <span>closer</span> than
            <br />
            you think.
          </h1>
          <p>
            Discover lost civilizations, explore ancient wonders,
            and see how history shaped our world.
          </p>
          <a href="#explore">Explore the Past ↗</a>
        </div>

        <div className="hero-card">
          <p>A JOURNEY THROUGH TIME</p>
          <div className="hourglass">⌛</div>
          <h2>History never really disappears.</h2>
          <p>Every place holds a thousand untold stories.</p>
        </div>
      </section>

      <section id="explore" className="explore-section">
        <p>YOUR NEXT DISCOVERY</p>
        <h2>Where will time take you?</h2>
        <p>Choose a destination and begin your journey.</p>

        <div className="search-bar">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Hampi, Egypt, Roman Empire..."
          />
          <button
  onClick={() => {
    const destination = search.toLowerCase().trim()

    if (!destination) {
      alert('Please enter a destination')
      return
    }

    const cards = document.querySelectorAll('.destination-card')
    const card = [...cards].find((item) =>
      (
  item.innerText.toLowerCase().includes(destination) ||
  (destination.includes('pyramid') &&
    item.innerText.toLowerCase().includes('egypt')) ||
  (destination.includes('rome') &&
    item.innerText.toLowerCase().includes('roman empire'))
)
    )

    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      alert('Destination not found. Try Hampi, Egypt, or Rome.')
    }
  }}
>
  Explore ↗
</button>
        </div>

        <div className="destination-grid">
          <article id="hampi" className="destination-card hampi">
            <p>ANCIENT INDIA</p>
            <h3>Hampi</h3>
            <p>Discover the Vijayanagara Empire.</p>
            <button onClick={() => setShowHampi(true)}>
  Discover Hampi ↗
</button>
          </article>
          {showHampi && (
  <div className="popup-overlay" onClick={() => setShowHampi(false)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <button className="popup-close" onClick={() => setShowHampi(false)}>
        ✕
      </button>

      <p>ANCIENT INDIA</p>
      <h2>Discover Hampi</h2>
      <p>
        Hampi was the capital of the Vijayanagara Empire.
        It is famous for its ancient temples, stone chariots,
        and remarkable architecture.
      </p>
      <p><strong>Location:</strong> Karnataka, India</p>
      <p><strong>Historical era:</strong> Vijayanagara Empire</p>
    </div>
  </div>
)}

          <article className="destination-card egypt">
            <p>ANCIENT CIVILIZATION</p>
            <h3>Ancient Egypt</h3>
            <p>Uncover the mysteries of the pyramids.</p>
           <button onClick={() => setShowEgypt(true)}>
  Discover Egypt ↗
</button>
          </article>
{showEgypt && (
  <div className="popup-overlay" onClick={() => setShowEgypt(false)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <button className="popup-close" onClick={() => setShowEgypt(false)}>
        ✕
      </button>

      <p>ANCIENT CIVILIZATION</p>
      <h2>Discover Ancient Egypt</h2>
      <p>
        Ancient Egypt is famous for its magnificent pyramids,
        pharaohs, hieroglyphics, and the civilization that
        developed along the Nile River.
      </p>
      <p><strong>Location:</strong> Northeastern Africa</p>
      <p><strong>Famous for:</strong> Pyramids of Giza</p>
    </div>
  </div>
)}
          <article className="destination-card rome">
            <p>CLASSICAL WORLD</p>
            <h3>Roman Empire</h3>
            <p>Explore the legacy of an extraordinary empire.</p>
            <button onClick={() => setShowRome(true)}>
  Discover Rome ↗
</button>
          </article>
          {showRome && (
  <div className="popup-overlay" onClick={() => setShowRome(false)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <button
        className="popup-close"
        onClick={() => setShowRome(false)}
      >
        ✕
      </button>

      <p>CLASSICAL WORLD</p>
      <h2>Discover the Roman Empire</h2>
      <p>
        The Roman Empire shaped history through its engineering,
        roads, architecture, laws, and impressive monuments.
      </p>
      <p><strong>Centre:</strong> Rome, Italy</p>
      <p><strong>Famous for:</strong> The Colosseum and Roman roads</p>
    </div>
  </div>
)}
        </div>
      </section>

      <section id="about" className="about-section">
        <p>BEYOND THE TEXTBOOK</p>
        <h2>Not just history. History you can explore.</h2>
        <p>
          TIMELOOP connects historical places, timelines, and AI-assisted
          discovery to help you understand the past and present.
        </p>
      </section>

      <footer>
        <h3>◈ TIMELOOP</h3>
        <p>Explore the Past. Understand the Present.</p>
      </footer>
    </div>
    </>
    )
}

export default App
