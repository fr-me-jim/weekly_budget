import React, {Fragment} from 'react';

const Budget = () => {
    return ( 
        <Fragment>
            <h2>Put your Budget</h2>
            <form>
                <input 
                    type="number" className="u-full-width"
                    placeholder="Add Budget"
                    //onChange={}
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