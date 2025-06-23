import React, { useState } from 'react';
import './css/WordsOfTheWeek.css';

const WordsOfTheWeek = (props) => {
  const [wordsOfTheWeek, setWordsOfTheWeek] = useState([
    { word: 'Autocracy', definition: 'A system of government by one person with absolute power' },
    { word: 'Eclogite', definition: 'A metamorphic rock containing granular minerals, typically garnet and pyroxene.' },
    { word: 'Clairaudiently', definition: 'The supposed faculty of perceiving, as if by hearing, what is inaudible' },
    { word: 'Etruscan', definition: 'Relating to ancient Etruria, its people, or their language' },
    { word: 'Recidivous', definition: 'A convicted criminal who reoffends, especially repeatedly' }
  ]);

  return (
    <div className="words-container">
      <h2 className="words-heading">Words of the Week</h2>
      <ul className="words-list">
        {/* Using .map() method to render the words of the week array */}
        {wordsOfTheWeek.map((wordObj, index) => (
          <li key={index} className="word-item">
            <span className="word">{wordObj.word}</span>: {wordObj.definition}
          </li>
        ))}
      </ul>
      <p>Visit our website every Monday for a new set of words of the week! We're always here to help you add to your
        vocabulary and learn more interesting and unique words. Expand your linguistic horizons and impress your
        friends with your newfound vocabulary. Whether you're a language enthusiast or simply looking to enhance your
        communication skills, our Words of the Week feature is sure to provide you with plenty of interesting and
        thought-provoking terms to explore.</p>
      {/* Using props.children here to add an image here, will render it in the RouteNav */}
      {props.children}
    </div>
  );
};

export default WordsOfTheWeek;
