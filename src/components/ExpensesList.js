import React from 'react';
import Expense from './Expense';

const ExpensesList = ({expenses}) => {
    return ( 
        <div className="expenses-made">
            <h2>List</h2>
            {expenses.map(expense => (
                <Expense 
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    );
}
 
export default ExpensesList;