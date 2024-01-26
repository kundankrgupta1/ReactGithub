import React from "react";
const Counter = ({count, handleChangeIn, handleChangeDe}) => {
    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={handleChangeIn}>Increment</button>
            <button onClick={handleChangeDe}>Decrement</button>
        </div>
    );
}

export default Counter
