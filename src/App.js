import React from 'react';
import Header from './modules/Header/Header'; // Import other components as needed
import Navigation from './modules/Navigation/Navigation';
import Main from './modules/Main/Main';
import Footer from './modules/Footer/Footer';

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