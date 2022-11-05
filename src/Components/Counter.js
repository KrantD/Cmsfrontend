
import React, { useState } from 'react';




function Counter(props) {
    const [number,setNumber] = useState(0)
    var incement=()=>{
        props.onIncrement(number)
    }
   var changeNumber=(event)=>{
        setNumber(event.target.value);
    };
    return (
        <div>
            <input type="number" onChange={changeNumber}/>
            <button onClick={incement} class="btn btn-success">Increment counter</button>
        </div>
    );
}

export default Counter;