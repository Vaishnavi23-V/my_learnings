import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => { // returns the news state
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}
function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState) // Call usereducer passing in reducer and initial state
    //A call to useReducer returns pair of values i.e current value of the state and 
    //dispatch method is capable of accepting an action and execute the code in render method
	return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button> 
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	)
}
export default CounterOne





