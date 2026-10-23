
import { useState, useEffect, useRef } from 'react'
import './App.css'
import Hampi from './pages/hampi.jsx'
import Egypt from './pages/Egypt.jsx'
import Rome from './pages/Rome.jsx'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Login from "./pages/login.jsx";
function Home() {
  const [search, setSearch] = useState('')
  const [showHampi, setShowHampi] = useState(false)
  const [showEgypt, setShowEgypt] = useState(false)
  const [showRome, setShowRome] = useState(false)
  const [activeTab, setActiveTab] = useState("hampi")
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')
const [chatHistory, setChatHistory] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [loginOpen, setLoginOpen] = useState(false)
const [isSignup, setIsSignup] = useState(false);
const chatBodyRef = useRef(null)
const destinationGridRef = useRef(null)

const handleDestinationScroll = () => {
  const grid = destinationGridRef.current;
  if (!grid) return;

  const cards = grid.querySelectorAll(".destination-card");
  const gridCenter = grid.getBoundingClientRect().left + grid.clientWidth / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(gridCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  if (closestCard) {
    if (closestCard.classList.contains("hampi")) {
      setActiveTab("hampi");
    } else if (closestCard.classList.contains("egypt")) {
      setActiveTab("egypt");
    } else if (closestCard.classList.contains("rome")) {
      setActiveTab("rome");
    }
  }
};

useEffect(() => {
  if (chatBodyRef.current) {
    chatBodyRef.current.scrollTop =
      chatBodyRef.current.scrollHeight
  }
}, [chatHistory, isLoading])


const sendMessage = async () => {
  const question = chatMessage.trim()

  if (!question || isLoading) return

  setChatHistory((previous) => [
    ...previous,
    { role: 'user', text: question },
  ])

  setChatMessage('')
  setIsLoading(true)
  

  try {
    const response = await fetch('http://127.0.0.1:8000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) {
      throw new Error('Server error')
    }

    const data = await response.json()

    setChatHistory((previous) => [
      ...previous,
      {
        role: 'ai',
        text: data.answer || 'No answer received.',
        sources: data.sources || [],
      },
    ])
  } catch (error) {
    setChatHistory((previous) => [
      ...previous,
      {
        role: 'ai',
        text: 'History AI server is not connected yet. Please try again when the backend is ready.',
      },
    ])
  } finally {
    setIsLoading(false)
  }
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


    
<div className="chat-body" ref={chatBodyRef}>
  <p>Hi! 👋 Ask me anything about history.</p>
  <p>Try asking about Hampi, Egypt, or Rome!</p>
  
{chatHistory.length === 0 && (
  <div className="quick-questions">
  <button onClick={() => {
    setChatMessage('Tell me about Hampi')
  }}>
    🏛️ Hampi
  </button>

  <button onClick={() => {
    setChatMessage('Tell me about Ancient Egypt')
  }}>
    🔺 Ancient Egypt
  </button>

  <button onClick={() => {
    setChatMessage('Tell me about the Roman Empire')
  }}>
    🏺 Roman Empire
  </button>
</div>
)}

  {chatHistory.map((message, index) => (
    <div
      key={index}
      className={message.role === 'user' ? 'user-message' : 'ai-message'}
    >
      {message.text}
    </div>
  ))}
{isLoading && (
  <div className="ai-message">
    <span className="thinking-dots">
      History AI is thinking
      <span> ···</span>
    </span>
  </div>
)}
</div>


    
<div className="chat-input">
  <input
  value={chatMessage}
  onChange={(e) => setChatMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && !isLoading) sendMessage()
  }}
  placeholder="Ask about history..."
  disabled={isLoading}
/>
  <button onClick={sendMessage} disabled={isLoading}>
  {isLoading ? '⏳' : '➤'}
</button>
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
          <button
  type="button"
  className="login-nav-button"
  onClick={() => setLoginOpen(true)}
>
  Login
</button>
        </div>
        <a href="#explore">Start Exploring ↗</a>
      </nav>
      
{loginOpen && (
  <div
    className="login-modal-overlay"
    onClick={() => setLoginOpen(false)}
  >
    <div
      className="login-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="login-modal-close"
        onClick={() => setLoginOpen(false)}
      >
        ×
      </button>

      <p className="login-modal-label">WELCOME TO TIMELOOP</p>
      <h2>Welcome, Explorer!</h2>
      <p className="login-modal-text">
        Sign in to continue your journey through history.
      </p>

      <form
  onSubmit={(e) => {
    e.preventDefault();
    setLoginOpen(false);
  }}
>
        <label>
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
        </label>
         {!isSignup && (
  <div style={{ textAlign: "right", margin: "8px 0 16px" }}>
    <button
      type="button"
      style={{
        background: "transparent",
        border: "none",
        color: "#e0bd7e",
        cursor: "pointer",
        fontSize: "13px"
      }}
      onClick={() => {
        const email = document.querySelector(
          ".login-modal input[type='email']"
        )?.value;

        if (!email) {
          alert("Please enter your email address first.");
          return;
        }

        alert(
          "Password reset instructions will be available once the backend is connected."
        );
      }}
    >
      Forgot Password?
    </button>
  </div>
)}
        <button type="submit" className="login-modal-submit">
  {isSignup ? "Create Account →" : "Sign In →"}
</button>
      </form>

      <p className="login-modal-footer">
  {isSignup ? "Already have an account? " : "New to TIMELOOP? "}

  <button
    type="button"
    className="signup-link"
    onClick={() => setIsSignup(!isSignup)}
  >
    {isSignup ? "Sign in" : "Create an account"}
  </button>
</p>
    </div>
  </div>
)}


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
            onKeyDown={(e) => {
  if (e.key === 'Enter') {
    document.querySelector('.search-bar button')?.click()
  }
}}
            placeholder="Search Hampi, Egypt, Roman Empire..."
          />
       <button
  onClick={() => {
    const destination = search.toLowerCase().trim()
    const normalizedSearch = destination
  .replace(/[^\w\s]/g, " ")
  .replace(/\s+/g, " ")
  .trim()

    if (!destination) {
      alert("Please enter a destination")
      return
    }

   if (
  normalizedSearch.includes("hampi") ||
  normalizedSearch.includes("temple")
) {
  window.location.href = "/hampi"
} else if (
  normalizedSearch.includes("egypt") ||
  normalizedSearch.includes("pyramid") ||
  normalizedSearch.includes("pharaoh")
) {
  window.location.href = "/egypt"
} else if (
  normalizedSearch.includes("rome") ||
  normalizedSearch.includes("roman") ||
  normalizedSearch.includes("colosseum")
) {
  window.location.href = "/rome"
} else {
  alert("Destination not found. Try Hampi, Egypt, or Rome.")
}
  }}
>
  Explore ↗
</button>
        </div>


<div className="destination-tabs">
  <Link
    to={`/${activeTab === "hampi" ? "hampi" : activeTab === "egypt" ? "egypt" : "rome"}`}
    className="active"
  >
    {activeTab === "hampi"
      ? "Hampi"
      : activeTab === "egypt"
      ? "Ancient Egypt"
      : "Roman Empire"}
  </Link>
</div>



        <div
  className="destination-grid"
  ref={destinationGridRef}
  onScroll={handleDestinationScroll}
>
            <div className="destination-slide">
  
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
      
<div className="history-timeline">
  <h3>📜 A Journey Through Time</h3>

  <div className="timeline-item">
    <span>14th Century</span>
    <p>Hampi rises as the capital of the Vijayanagara Empire.</p>
  </div>

  <div className="timeline-item">
    <span>16th Century</span>
    <p>Hampi flourishes as a major centre of trade, art and architecture.</p>
  </div>

  <div className="timeline-item">
    <span>1565</span>
    <p>The city suffers major destruction after the Battle of Talikota.</p>
  </div>
</div>

    </div>
  </div>
)}
    </div>
<div className="destination-slide">
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
      
<div className="history-timeline">
  <h3>📜 A Journey Through Time</h3>

  <div className="timeline-item">
    <span>c. 3100 BCE</span>
    <p>Upper and Lower Egypt are unified under one ruler.</p>
  </div>

  <div className="timeline-item">
    <span>c. 2600 BCE</span>
    <p>The Old Kingdom flourishes and the great pyramids are built.</p>
  </div>

  <div className="timeline-item">
    <span>30 BCE</span>
    <p>Egypt becomes a province of the Roman Empire after Cleopatra VII's reign.</p>
  </div>
</div>

    </div>
  </div>
)}
  </div>
<div className="destination-slide">

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
      
<div className="history-timeline">
  <h3>📜 A Journey Through Time</h3>

  <div className="timeline-item">
    <span>753 BCE</span>
    <p>According to Roman tradition, the city of Rome is founded.</p>
  </div>

  <div className="timeline-item">
    <span>27 BCE</span>
    <p>Augustus becomes the first Roman emperor.</p>
  </div>

  <div className="timeline-item">
    <span>476 CE</span>
    <p>The Western Roman Empire comes to an end.</p>
  </div>
</div>

    </div>
  </div>
)}
</div>
</div>
      </section>

     
<section id="about" className="about-section">
  <div className="about-content">
    <p className="about-label">✦ BEYOND THE TEXTBOOK</p>

    <h2>
      The past is full of stories.
      <br />
      <span>Let's explore them.</span>
    </h2>

    <p className="about-description">
      TIMELOOP is an interactive history exploration platform
      that brings ancient civilizations, remarkable places, and
      important historical events closer to today's learners.
      Discover the past through engaging destination cards,
      historical timelines, and AI-assisted discovery.
    </p>
     
<div className="about-features">
  <div className="about-feature">
    <span className="about-icon">🏛️</span>
    <h3>Explore Civilizations</h3>
    <p>
      Discover the rich history of Hampi, uncover the mysteries
      of Ancient Egypt, and explore the legacy of the Roman Empire
      through detailed destination cards and historical facts.
    </p>
  </div>

  <div className="about-feature">
    <span className="about-icon">⌛</span>
    <h3>Travel Through Time</h3>
    <p>
      Follow important historical events through interactive
      timelines and understand how ancient civilizations,
      remarkable monuments, and key events shaped our world.
    </p>
  </div>

  <div className="about-feature">
    <span className="about-icon">✦</span>
    <h3>Discover with AI</h3>
    <p>
      Ask History AI questions about the past, explore historical
      topics through a chat interface, and make learning history
      more engaging with AI-assisted discovery.
    </p>
  </div>
</div>


    <p className="about-footer-text">
      Explore the Past. Understand the Present.
    </p>
  </div>
</section>


      <footer>
        <h3>◈ TIMELOOP</h3>
        <p>Explore the Past. Understand the Present.</p>
      </footer>
    </div>
    </>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hampi" element={<Hampi />} />
        <Route path="/egypt" element={<Egypt />} />
      <Route path="/rome" element={<Rome />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
