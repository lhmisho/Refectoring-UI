
// actions
const FETCH_POSTS = 'FETCH_POSTS'
const FETCH_ERROR = 'FETCH_ERROR'
const TOGGLE_FAV = 'TOGGLE_FAV'
const START_LOADING = 'START_LOADING'

// action creator
export const fetchPosts = posts => ({
    type: FETCH_POSTS,
    payload: posts
})

export const catchError = msg => ({
    type: FETCH_ERROR,
    payload: msg
})

export const toggleFav = postId => ({
     type: TOGGLE_FAV, payload: postId 
})

export const startLoading = () => ({ type: START_LOADING })

// reducer
export const reducer = (state, action) => {
    switch (action.type) {
        case START_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FETCH_POSTS: {
            const posts = action.payload.map(post => ({
                ...post,
                isFav: false,
            }))
            return {
                isLoading: false,
                errors: '',
                posts
            }
        } case FETCH_ERROR: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload || 'Server error occured'
            }
        } case TOGGLE_FAV: {
            const posts = [...state.posts]
            const index = posts.findIndex(post => post.id === action.payload)
            posts[index].isFav = !posts[index].isFav
            return {
                ...state,
                posts
            }
        } default: return state
    }
}