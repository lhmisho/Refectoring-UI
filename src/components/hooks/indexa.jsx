import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const MyHooks = props => {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(22)

    const [posts, setPosts] = useState([])
    const [errors, setErrors] = useState([''])
    const [loading, setLoading] = useState([false])

    useEffect(() => {
        setLoading(true)
        Axios.get(BASE_URL)
            .then(res => {
                setPosts(res.data.slice(0, 5))
                setErrors('')
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    useEffect(() => {
        console.log('Count updated')
    }, [count]);

    useEffect(() => {
        console.log('Age Updated')
    }, [age])

    useEffect(() => {
        console.log('Only called on initial state')
    }, [])

    return (
        <>
            <h1>I am hooks</h1>
            <h4>Total clicked: {count}</h4>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setCount(count + 1) }}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundeds" onClick={() => { setCount(count - 1) }}>Decrement</button>


            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundeds" onClick={() => { setAge(age - 1) }}>Update age</button>

            <h1>Hook api call and set state</h1>
            {loading && <h2>Loading....</h2>}
            {errors && <h2>Maybe some error occureds ....</h2>}
            {posts.map((item, idx) => {
                return (
                    <h2>{item.title}</h2>
                )
            })}
        </>
    )
}

export default MyHooks