import React from 'react'; // Importa React (necesario para JSX)

function App() {
  const greeting = '¡Hola desde React!'; // Variable JS
  return (
    <div className="App">
      <h1>{greeting}</h1> {/* Usa {} para JS dentro de HTML */}
      <h2>caca</h2>
      <p>Este es mi primer componente funcional.</p>
      <button onClick={() => alert('¡Botón clickeado!')}>Haz click</button>
    </div>
  );
}

export default App; // Exporta para usarlo en index.js