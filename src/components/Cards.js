const Cards = (props) => {
  const { handleClick, runes } = props;

  return (
    <div className="cards-container" onClick={handleClick}>
      <div className="first-row">
        {runes[0].map((rune) => {
          return (
            <div className="card-container" key={rune}>
              <p className="rune">{rune}</p>
            </div>
          );
        })}
      </div>
      <div className="second-row">
        {runes[1].map((rune) => {
          return (
            <div className="card-container" key={rune}>
              <p className="rune">{rune}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
