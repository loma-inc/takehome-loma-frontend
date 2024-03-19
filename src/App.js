import React from 'react';
import './App.css';
import ListingPage from './ListingPage';

function App() {
  const mockListing = {
    title: 'Stylish Sneakers',
    description: 'The perfect shoe for the stylish athlete.',
  };

  return (
    <div className="App">
      <header className="App-header">
        <ListingPage listing={mockListing} />
      </header>
    </div>
  );
}

export default App;
