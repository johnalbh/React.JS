import React, { useState } from 'react';
export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');
  const divStyle = { backgroundColor: color, color: 'white' };

  return (
    <div style={divStyle} class='prueba'>
      <h1> The color is {color}</h1>
      <button onClick={() => setColor('Blue')}>Blue</button>
      <button onClick={() => setColor('BlueViolet')}>BlueViolet</button>
      <button onClick={() => setColor('Chartreuse')}>Chartreuse</button>
      <button onClick={() => setColor('CornflowerBlue')}>CornflowerBlue</button>
      <button onClick={() => setColor('Red')}>Red</button>
    </div>
  );
}
