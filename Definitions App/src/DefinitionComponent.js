import React from 'react';

// definition is passed as a prop
const DefinitionComponent = ({ definition }) => {
  return (
    <div>
      <h2>Definition:</h2>
      <p>{definition}</p>
      <br />
    </div>
  );
};

export default DefinitionComponent;
