import React, {useEffect, useReducer} from 'react'
import Axios from 'axios'

const FETCH_POST = 'FETCH_POST';
const FETCT_ERROR = 'FETCT_ERROR';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const START_LOADING = 'START_LOADING';

const initState = {
    isLoading: false,
    posts: [],
    errors: ''
};

const fetchPost = posts => ({
    type: FETCH_POST,
    payload: posts
})
const reducer = (state, action) => {
    switch (action.type) {
        case START_LOADING: {
            return {
                ...state,
                isLoading: true,
                errors: false
            }
        }
        case FETCH_POST: {
            const posts = action.payload.map(post => ({
                ...post,
                isFavorite: false
            }));
            return {
                isLoading: false,
                errors: '',
                posts
            };
        }
        case FETCT_ERROR: {
            return {
                ...state,
                errors: action.payload || "Server error occured!",
                isLoading: false
            };
        }
        case TOGGLE_FAVORITE: {
            const posts = [...state.posts];
            let index = posts.findIndex(post => post.id === action.payload);
            posts[index].isFavorite = !posts[index].isFavorite;
            return {
                ...state,
                posts
            };
        }
        default:
            return state
    }
};

const Post = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    useEffect(() => {
        dispatch(START_LOADING);
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                data = data.slice(0, 5);
                dispatch(fetchPost(data))
            })
            .catch(e => {
                console.log("Error", e);
            })
    }, []);
    console.log(state)
    const {isLoading, errors, posts} = state
    return (
        <div className="font-sans bg-grey-lighter flex flex-col min-h-screen w-full">
            <h1>My Post reducer</h1>
            {isLoading && <h2>Loading....</h2>}
            {errors && <h2>Maybe some error occureds ....</h2>}
            <div className="mb-6">
                <div className="container mx-auto px-4 lg:rounded-lg">
                    <table className="table-auto bg-white w-full shadow-2xl lg:rounded-lg">
                        <thead className="bg-gray-200 text-gray-700 text-sm">
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    {item.isFavorite === false &&
                                        <>
                                        <td className="border px-4 py-2">{item.title}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => {
                                                dispatch({type: TOGGLE_FAVORITE, payload: item.id})
                                            }}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                {item.isFavorite ? 'already favorite' : 'favorite'}
                                            </button>
                                        </td>
                                        </>
                                    }
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <hr/>
            <h1>My Favorite Post</h1>
            <div className="mb-6">
                <div className="container mx-auto px-4 lg:rounded-lg">
                    <table className="table-auto bg-white w-full shadow-2xl lg:rounded-lg">
                        <thead className="bg-gray-200 text-gray-700 text-sm">
                        <tr>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map((item, idx) => {
                            return (
                                <>
                                    {item.isFavorite === true &&
                                    <tr key={`fav_${idx}`}>
                                        <td className="border px-4 py-2">{item.title}</td>
                                        <td className="border px-4 py-2">
                                            <button onClick={() => {
                                                dispatch({type: TOGGLE_FAVORITE, payload: item.id})
                                            }}
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                {item.isFavorite ? 'already favorite' : 'favorite'}
                                            </button>
                                        </td>
                                    </tr>
                                    }
                                </>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Post