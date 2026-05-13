

import React from 'react';

const ColourSelector = (props) => {
  const { updateSelectedColor } = props;
  
  // Array of colors to render as buttons
  const colors = ["red", "green", "blue"];

  return (
    <div className="selector-container">
      {colors.map((color) => (
        <button
          key={color}
          // The handler is called with the specific color string
          onClick={() => updateSelectedColor(color)}
          // Using inline styles or dynamic classes to identify the button
          style={{ backgroundColor: color, margin: "5px", padding: "10px" }}
          data-testid={color}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
