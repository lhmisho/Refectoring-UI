import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import { reducer, fetchPosts, catchError, toggleFav, startLoading } from './reducer'

const initState = {
    isLoading: false,
    errors: '',
    posts: []
}
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const MyReducer = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        dispatch(startLoading())
        axios.get(BASE_URL)
            .then(({ data }) => {
                console.log(data)
                data = data.slice(0, 5)
                // dispatch({ type: FETCH_POSTS, payload: data })
                dispatch(fetchPosts(data))
            })
            .catch(e => {
                console.log(e)
                // dispatch({ type: FETCH_ERROR })
                dispatch(catchError(e))
            })
    }, [])

    const { isLoading, errors, posts } = state
    const favPosts = posts.filter(post => post.isFav)
    console.log(posts)
    return (
        <>
            <div className="container">
                {isLoading && <h2>Loading....</h2>}
                {errors && <h2>Maybe some error occureds ....</h2>}
                {posts.length > 0 && posts.map((item, idx) => (
                    <li key={idx} className="list-group-item">
                        <h2>{item.title}</h2>
                        <button onClick={() => dispatch(toggleFav(item.id))}>{item.isFav ? 'fa fa-heart-block' : 'do fav'}</button>
                    </li>
                ))}
            </div>
            <div className="container">
                {favPosts.length > 0 && favPosts.map((item, idx) => (
                    <li key={idx} className="list-group-item">
                        <h2>{item.title}</h2>
                        {/* <button onClick={() => { dispatch({ type: TOGGLE_FAV, payload: item.id }) }}>{item.isFav ? 'fa fa-heart-block' : 'do fav'}</button> */}
                    </li>
                ))}
            </div>
        </>
    )
}

export default MyReducer