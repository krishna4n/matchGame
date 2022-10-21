import './index.css'

const GameOver = props => {
  const {score, onTryAgain} = props
  const tryAgain = () => {
    onTryAgain()
  }
  return (
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p>Your Score</p>
      <p>{score}</p>
      <button type="button" className="try-again-button" onClick={tryAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOver
