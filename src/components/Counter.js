import React, {useState} from 'react'

const Counter = () => {
    const initialState = 0

    const [count, setCount] = useState(initialState)

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter
