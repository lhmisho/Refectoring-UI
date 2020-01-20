import { createStore } from 'redux'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC': {
            return state + action.payload
        }
        case 'DEC': {
            return state - action.payload
        }
        case 'RES': {
            return 0
        }
        default: return state
    }
}

const store = createStore(reducer, 0)

console.log(store)

store.subscribe(() => {
  console.log(store.getState());
})

// store.subscribe(() => {
//   console.log('Subscriber 2 - ' + store.getState())
// })

store.dispatch({type: 'INC', payload: 5})
store.dispatch({type: 'INC', payload: 10})