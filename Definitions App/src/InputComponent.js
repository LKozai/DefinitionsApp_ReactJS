import React, { useState } from 'react';
import './css/InputComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputComponent = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [showDefinition, setShowDefinition] = useState(false);

  const fetchData = async (input) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      const data = await response.json();
      const firstDefinition = data[0]?.meanings[0]?.definitions[0]?.definition;
      if (firstDefinition) {
        setDefinition(firstDefinition);
        setShowDefinition(true);
      } else {
        console.error('No definition found for the word:', input);
        setDefinition('Definition not found');
        setShowDefinition(true);
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('Error fetching definition');
      setShowDefinition(true);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    // making sure only letters are entered
    if (/^[a-zA-Z]+$/.test(input) || input === '') {
      setWord(input);
    }
  };

  return (
    <div className="container">
      <h2>Definitions App</h2>
      <input type="text" value={word} onChange={handleChange} />
      <br /><br />
      {/* using bootstrap button class for the "Get Definition" button */}
      <button className="btn btn-primary" onClick={() => fetchData(word)}>Get Definition</button>
      {showDefinition && <p className="definition">{definition}</p>}
      <br /><br /><br />
      <h2>About Us</h2>
      <p className="about">
      Welcome to our Definitions App, our application that provides instant access to accurate and comprehensive definitions.
      In today's fast-paced world, effective communication is more important than ever, and having a strong vocabulary is a
      cornerstone of effective communication. Our app aims to empower users with the knowledge they need to express themselves
      clearly and confidently in any situation.<br /><br />
      Whether you're a student preparing for exams, a professional writing reports, or simply someone who enjoys expanding their
      knowledge, our Definitions App is here to serve you. With a vast database of words and their meanings at your fingertips,
      you can quickly look up any term and gain a deeper understanding of its significance.<br /><br />
      But our app is more than just a dictionary - it's a tool for lifelong learning. By providing definitions in a clear and
      concise format, we make it easy for users to absorb new information and incorporate it into their daily lives. Whether you're
      learning a new language or simply curious about the world around you, our app is here to support your intellectual growth.
      </p>
    </div>
  );
};

export default InputComponent;
