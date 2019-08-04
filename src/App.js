import React, {useState, useEffect} from 'react';
import Budget from './components/Budget';
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';

function App() {

  //state
  const [ budget, setBudget ] = useState(0);
  const [ showBudget, setShowBudget ] = useState(true);
  const [ expense, setExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);

  useEffect(() => {
    const expensesList = [...expenses, expense];

    setExpenses(expensesList);
  }, [expense, expenses]);

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
                  <ExpenseForm 
                    setExpense={setExpense}
                  />
                </div>

                <div className="one-half column">
                  <ExpensesList 
                    expenses={expenses}
                  />
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
