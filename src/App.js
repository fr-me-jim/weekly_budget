import React, {useState, useEffect} from 'react';
import Budget from './components/Budget';
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';
import BudgetControl from './components/BudgetControl';

function App() {

  //state
  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showBudget, setShowBudget ] = useState(true);
  const [ expense, setExpense ] = useState({});
  const [ expenses, setExpenses ] = useState([]);

  //useEffect dependency flag
  const [ createExpense, setCreateExpense ] = useState(false);

  useEffect(() => {
    if(createExpense) {
      const expensesList = [...expenses, expense];

      setExpenses(expensesList);

      //substract remaining
      const remainingBudget = remaining - expense.expenseAmount;
      setRemaining(remainingBudget);

      //refresh flag
      setCreateExpense(false);
    }
  }, [createExpense, expense, expenses, remaining]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Expense</h1>

        <div className="main-content content">
          {showBudget ? 
            <Budget 
              setBudget={setBudget}
              setShowBudget={setShowBudget}
              setRemaining={setRemaining}
            /> : 
            (
              <div className="row">
                <div className="one-half column">
                  <ExpenseForm 
                    setExpense={setExpense}
                    setCreateExpense={setCreateExpense}
                  />
                </div>

                <div className="one-half column">
                  <ExpensesList 
                    expenses={expenses}
                  />

                  <BudgetControl 
                    budget={budget}
                    remaining={remaining}
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
