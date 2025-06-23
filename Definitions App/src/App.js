import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteNav from './RouteNav';

const App = () => {
  return (
    //we redirect everything to the RouteNav function as a child component, which contains the Routing with Links
    <Router>
      <RouteNav />
    </Router>
  );
};

export default App;
