import React, {useState} from 'react';
import Budget from './components/Budget';
import Form from './components/Form';

function App() {

  //state
  const [ budget, setBudget ] = useState(0);
  const [ showBudget, setShowBudget ] = useState(true);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expense</h1>

        <div className="main-content content">
          {showBudget ? 
            <Budget 
              setBudget={setBudget}
              setShowBudget={setShowBudget}
            /> : 
            (
              <div className="row">
                <div className="one-half column">
                  <Form />
                </div>

                <div className="one-half column">

                </div>
              </div>
            )      
          }
        </div>
      </header>
    </div>
  );
}

export default App;
