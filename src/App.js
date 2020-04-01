import React from 'react';
import './components/Contact.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact name = 'Vera Larson' avatar = 'https://randomuser.me/api/portraits/women/48.jpg' isOnline/>
      <Contact name = 'Marshall Wilson' avatar = 'https://randomuser.me/api/portraits/men/99.jpg' isOnline = {false}/>
      <Contact name = 'Chris Rpdriguez' avatar = 'https://randomuser.me/api/portraits/men/2.jpg' isOnline/>

    </div>
  );
}

export default App;
