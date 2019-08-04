import React from 'react';
import Budget from './components/Budget';

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Weekly Expense</h1>

        <div className="main-content content">
          <Budget />
        </div>
      </header>
    </div>
  );
}

export default App;
