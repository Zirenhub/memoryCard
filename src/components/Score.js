const Score = (props) => {
  const { score, bestScore } = props;

  return (
    <div className="score-container">
      <div className="current-score">
        <p>Current Score</p>
        <p>{score}</p>
      </div>
      <div className="best-score">
        <p>Best Score</p>
        <p>{bestScore}</p>
      </div>
    </div>
  );
};

export default Score;
