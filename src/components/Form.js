import React, {useState} from 'react';

const Form = () => {

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

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Add here your Expenses</h2>

            <div className="field">
                <label>Expense Name</label>
                <input 
                    type="text" className="u-full-width"
                    placeholder="Ex. Transport"
                    onChange={e => setExpenseName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Expense Amount</label>
                <input 
                    type="number" className="u-full-width"
                    placeholder="Ex. 300"
                    onChange={e => setExpenseAmount(parseInt(e.target.value), 10)}
                />
            </div>

            <input 
                type="submit" className="button-primary u-full-width"
                value="Add expense"    
            />
        </form>    
    );
}
 
export default Form;