
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";


function Login() {
  const [isSignup, setIsSignup] = useState(false);
   const [showForgotPassword, setShowForgotPassword] = useState(false);
const [resetEmail, setResetEmail] = useState("");
  return (
    <div className="login-page">
      <div className="login-visual">
        <Link to="/" className="login-brand">
          ⌛ TIMELOOP
        </Link>

        <div className="login-visual-content">
          <p className="login-eyebrow">YOUR JOURNEY THROUGH TIME</p>
          <h1>Every era has a story.</h1>
          <p>
            Explore ancient civilizations, discover lost worlds,
            and travel through history with TIMELOOP.
          </p>
          <div className="login-era-tags">
            <span>Hampi</span>
            <span>Ancient Egypt</span>
            <span>Roman Empire</span>
          </div>
        </div>

        <p className="login-footer">DISCOVER THE PAST. REIMAGINE THE FUTURE.</p>
      </div>

      <div className="login-form-side">
        <div className="login-form">
          <Link to="/" className="login-mobile-brand">
            ⌛ TIMELOOP
          </Link>

          <p className="login-eyebrow">
            {isSignup ? "START YOUR JOURNEY" : "WELCOME BACK, EXPLORER"}
          </p>

          <h2>{isSignup ? "Create account" : "Welcome back"}</h2>
          <p style={{ color: "red", fontSize: "20px" }}>TEST LOGIN PAGE</p>
          
          <p className="login-subtitle">
            {isSignup
              ? "Create your account to begin exploring history."
              : "Sign in to continue your journey through time."}
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {isSignup && (
              <label>
                Full name
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </label>
            )}

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
                minLength={6}
                required
              />
            </label>
            

            {!isSignup && (
  <div className="login-options">
    <label className="remember-option">
      <input type="checkbox" />
      Remember me
    </label>

    <button
      type="button"
      className="forgot-password-link"
      onClick={() => setShowForgotPassword(true)}
    >
      Forgot Password?
    </button>
  </div>
)}

            <button type="submit" className="login-submit">
              {isSignup ? "Create Account" : "Sign In"} →
            </button>
          </form>

          <p className="login-switch">
            {isSignup ? "Already have an account?" : "New to TIMELOOP?"}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? " Sign in" : " Create account"}
            </button>
          </p>

          <p className="login-note">
            By continuing, you agree to use TIMELOOP responsibly.
          </p>
             
        </div>
      </div>
         {showForgotPassword && (
        <div className="forgot-modal-overlay">
          <div className="forgot-modal">
            <button
              type="button"
              className="forgot-modal-close"
              onClick={() => {
                setShowForgotPassword(false);
                setResetEmail("");
              }}
              aria-label="Close popup"
            >
              ×
            </button>

            <p className="login-eyebrow">ACCOUNT RECOVERY</p>
            <h2>Forgot password?</h2>
            <p>
              Enter your email address to start the password reset process.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Reset instructions will be available once the backend is connected.");
                setShowForgotPassword(false);
                setResetEmail("");
              }}
            >
              <label>
                Email address
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </label>

              <button type="submit" className="login-submit">
                Reset Password →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
