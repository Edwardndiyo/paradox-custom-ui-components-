
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to Paradox Custom UI Components</h1>
//     </div>
//   );
// }

// export default App;




// src/App.tsx

import React from 'react';
import Navbar from './components/Navbar.tsx'; // Import the Navbar
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="navbar">
        <h2>Navbar Section</h2>
        {/* Your Navbar component demo goes here */}
      </section>
      <section id="cards">
        <h2>Cards Section</h2>
        {/* Your Cards component demo goes here */}
      </section>
      <section id="buttons">
        <h2>Buttons Section</h2>
        {/* Your Buttons component demo goes here */}
      </section>
    </div>
  );
};

export default App;
