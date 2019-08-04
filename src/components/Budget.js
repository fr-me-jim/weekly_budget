import React, {Fragment, useState} from 'react';

const Budget = () => {

    //define state
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    //validate budget
    const handleSubmit = e => {
        e.preventDefault();

        //validation
        if(amount < 1 || isNaN(amount)){
            setError(true);
            return;
        }

        //success in validation


    }

    return ( 
        <Fragment>
            <h2>Put your Budget</h2>

            {error ? <p className="alert alert-danger error">Invalid Budget!</p> : null}

            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="number" className="u-full-width"
                    placeholder="Add Budget"
                    onChange={e => setAmount(parseInt(e.target.value), 10)}
                />
                <input 
                    type="submit" className="button-primary u-full-width"
                    value="Establish Budget"    
                />
            </form>
        </Fragment>
    );
}
 
export default Budget;