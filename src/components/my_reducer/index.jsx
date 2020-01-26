import React, {useState, useReducer} from 'react'

const initData = 0;

const reducer = (state, action) => {
    switch(action.type){
        case 'increment': {
            return state + 1
        }
        case 'decrement': {
            return state -1
        }
        case 'reset': {
            return initData
        }
        default: return initData
    }
}


const MyReducer = (props) => {
    const [count, countDispatch] = useReducer(reducer, initData);
    // const [count, setCount] = useState(0)
    // const increment = () =>{
    //     setCount(count + 1)
    // }
    // const decrement = () =>{
    //     setCount(count -1)
    // }
    // const reset = () => {
    //     setCount(0)
    // }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => countDispatch({type: 'increment'})}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => countDispatch({type: 'decrement'})}>Decrement</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => countDispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default MyReducer