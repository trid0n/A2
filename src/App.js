import React from 'react';
import './style.css'; // Import your stylesheet here
import Header from './Header'; // Import other components as needed
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
rth