import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import InputComponent from './InputComponent';
import DefinitionComponent from './DefinitionComponent';
import RegistrationForm from './RegistrationForm';
import WordsOfTheWeek from './WordsOfTheWeek';
import './css/Nav.css';
import wordImage from './images/shutterstock.jpg';

const RouteNav = () => {
  return (
    <div>
      {/* Use of routing: Nav bar with links, featuring route paths to each of our components */}
      <nav>
        <Link to="/">Home</Link> | &ensp;
        <Link to="/registration">Registration</Link> | &ensp;
        <Link to="/words">Words of the Week</Link>
      </nav>
      <Routes>
        <Route path="/" element={<InputComponent />} />
        <Route path="/definition" element={<DefinitionComponent />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/words" element={
          <WordsOfTheWeek>
          {/* image is passed to WordsOfTheWeek component through props.children */}
            <div className="image-container">
              <img src={wordImage} className="word-image" />
            </div>
          </WordsOfTheWeek> } />
      </Routes>
    </div>
  );
};

export default RouteNav;
