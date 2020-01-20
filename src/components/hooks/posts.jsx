import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * creating custom hooks 
 */
function useData(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        Axios.get(url)
            .then(({ data }) => {
                setData(data.slice(0, 5))
                setIsLoading(false)
                setError('')
            })
            .catch(error => {
                setError('Some error occurs check console log')
                setIsLoading(false)
                console.log(error)
            })
    }, []);

    return{
        isLoading,
        errors,
        data
    }
}

const Posts = () => {
    const [count, setCount] = useState(0)
    const {isLoading, errors, data: posts} = useData(`${BASE_URL}/posts`)
    const {isLoading: isLoading2, errors: errors2, data: users} = useData(`${BASE_URL}/users`)

    useEffect(() => {
        console.log('count updated')
    }, [])

    return (
        <div class="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
            <h2>Count: {count}</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(prev => (prev + 1))}>Increment</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count - 1)}>Decrement</button>
            <h1>Hook api call and set state</h1>
            {isLoading && <h2>Loading....</h2>}
            {errors && <h2>Maybe some error occureds ....</h2>}
            <div class="mb-6">
                <div class="container mx-auto px-4 lg:rounded-lg">
                    <table class="table-auto bg-white w-full shadow-2xl lg:rounded-lg">
                        <thead class="bg-gray-200 text-gray-700 text-sm">
                            <tr>
                                <th class="border px-4 py-2">Name</th>
                                <th class="border px-4 py-2">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td class="border px-4 py-2">{item.title}</td>
                                        <td class="border px-4 py-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <h2>All users</h2>
            {isLoading2 && <h2>Loading....</h2>}
            {errors2 && <h2>Maybe some error occureds ....</h2>}
            <div class="mb-6">
                <div class="container mx-auto px-4 lg:rounded-lg">
                    <table class="table-auto bg-white w-full shadow-2xl lg:rounded-lg">
                        <thead class="bg-gray-200 text-gray-700 text-sm">
                            <tr>
                                <th class="border px-4 py-2">Name</th>
                                <th class="border px-4 py-2">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td class="border px-4 py-2">{item.name}</td>
                                        <td class="border px-4 py-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Posts