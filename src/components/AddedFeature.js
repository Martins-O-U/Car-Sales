import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.feature)}>X</button>      
      <div key={props.feature.id}>
        {props.feature.name}
      </div>
    </li>
  );
};

export default AddedFeature;
