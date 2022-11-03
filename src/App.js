import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Score from './components/Score';

const App = () => {
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);
  const [clickedRunes, setClickedRunes] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = (rune) => {
    if (clickedRunes.includes(rune)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedRunes([]);
    } else {
      setClickedRunes([...clickedRunes, rune]);
      setScore(score + 1);
    }
  };

  const updateRunes = () => {
    const runes = [
      '𐰀',
      '𐰁',
      '𐰂',
      '𐰃',
      '𐰄',
      '𐰅',
      '𐰆',
      '𐰇',
      '𐰈',
      '𐰉',
      '𐰊',
      '𐰋',
      '𐰌',
      '𐰍',
      '𐰎',
      '𐰏',
      '𐰐',
      '𐰑',
    ];

    const newArr = runes.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    const middleIndex = Math.ceil(newArr.length / 2);
    const firstHalf = newArr.splice(0, middleIndex);
    const secondHalf = newArr.splice(-middleIndex);

    setFirstHalf(firstHalf);
    setSecondHalf(secondHalf);
  };

  useEffect(() => {
    updateRunes();
  }, [clickedRunes]);

  const handleClick = (e) => {
    const { textContent, className } = e.target;
    if (className !== 'card-container' && className !== 'rune') {
      return;
    }

    updateScore(textContent);
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1>Memory card</h1>
      </div>
      <Cards handleClick={handleClick} runes={[firstHalf, secondHalf]} />
      <Score score={score} bestScore={bestScore} />
    </div>
  );
};

export default App;
