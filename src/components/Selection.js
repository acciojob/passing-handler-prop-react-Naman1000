
import React from 'react';

const Selection = (props) => {
  const { selectedColor } = props;

  // We define the style object once to keep the JSX clean
  const boxStyle = {
    backgroundColor: selectedColor || 'transparent', // Default to transparent if no color is picked
    width: '100px',
    height: '100px',
    border: '1px solid black',
    margin: '10px',
    display: 'inline-block'
  };

  return (
    <div className="selection-container">
      {/* Rendering three boxes with the className "fix-box" */}
      <div className="fix-box" style={boxStyle}></div>
      <div className="fix-box" style={boxStyle}></div>
      <div className="fix-box" style={boxStyle}></div>
    </div>
  );
};

export default Selection;
