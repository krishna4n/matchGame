import './index.css'

const Navbar = props => {
  const {score, timer} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />

      {timer >= 0 && (
        <div className="score-container">
          <p className="score-text">
            Score: <span className="score-value">{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="time-text">{timer} Sec</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
