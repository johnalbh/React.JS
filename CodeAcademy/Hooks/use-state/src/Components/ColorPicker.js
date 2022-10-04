import React, { useState } from 'react';
export default function ColorPicker() {
  const [color, setColor] = useState();
  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle} class='prueba'>
      <p> The color is {color}</p>
      <button onClick={() => setColor('aquamarine')}>Aquamarine</button>
    </div>
  );
}
