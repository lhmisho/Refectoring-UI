import React, { useState, useEffect } from 'react'


const MyHooks = () => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(25)
    
    useEffect(() => {
        console.log('i will call only once')
    }, [])
    useEffect(() => {
        console.log('age updated')
    }, [age])

    useEffect(() => {
        console.log('count updated')
    }, [count])



    return (
        <div>
            <h1>I am hooks</h1>
            <h2>Count: {count}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(prev => (prev + 1))}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count - 1)}>Decrement</button>
            <div>
                <h1>I am hooks</h1>
                <h2>Age: {age}</h2>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAge(prev => (prev + 1))}>Increment</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAge(age - 1)}>Decrement</button>
            </div>
        </div>
    )
}
export default MyHooks