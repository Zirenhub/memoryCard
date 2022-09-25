import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';

const App = () => {
  const [runes, setRunes] = useState([
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
  ]);

  const updateRunes = () => {
    console.log('runes just updated');
    const oldArr = runes.slice();
    for (let i = oldArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [oldArr[i], oldArr[j]] = [oldArr[j], oldArr[i]];
    }
    setRunes(oldArr);
  };

  const handleClick = (e) => {
    const { textContent } = e.target;

    console.log(textContent);
    updateRunes();
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1>Memory card</h1>
      </div>
      <Cards handleClick={handleClick} runes={runes} />
    </div>
  );
};

export default App;
