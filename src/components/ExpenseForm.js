import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const ExpenseForm = (props) => {

    //props
    const { setExpense } = props;

    //state
    const [ expenseName, setExpenseName ] = useState('');
    const [ expenseAmount, setExpenseAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    //adding expense
    const handleSubmit = e => {
        e.preventDefault();

        //validate
        if(expenseAmount < 1 || isNaN( expenseAmount ) || expenseName === ''){
            setError(true);
            return;
        }

        //create expense obj
        const expense = {
            expenseName,
            expenseAmount,
            id : shortid.generate()
        }

        //send expense to main component
        setExpense(expense);

        //delete alert
        setError(false);

        //refresh expense form
        setExpenseName('');
        setExpenseAmount('');

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Add here your Expenses</h2>

            {error ? <Error message="Both fields are mandatory or Invalid Budget!" /> : null}

            <div className="field">
                <label>Expense Name</label>
                <input 
                    type="text" className="u-full-width"
                    placeholder="Ex. Transport"
                    onChange={e => setExpenseName(e.target.value)}
                    value={expenseName}
                />
            </div>

            <div className="field">
                <label>Expense Amount</label>
                <input 
                    type="number" className="u-full-width"
                    placeholder="Ex. 300"
                    onChange={e => setExpenseAmount(parseInt(e.target.value), 10)}
                    value={expenseAmount}
                />
            </div>

            <input 
                type="submit" className="button-primary u-full-width"
                value="Add expense"    
            />
        </form>    
    );
}
 
export default ExpenseForm;