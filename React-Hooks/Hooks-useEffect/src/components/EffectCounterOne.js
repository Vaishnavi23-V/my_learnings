import React, { useState, useEffect } from 'react'

function EffectCounterOne() {
	const [count, setCount] = useState(0)
	const [name, setName] = useState('')
     //Requesting react to execute the function that is passed as argument everytime the component renders
	useEffect(() => { 
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
	}, [count]) //effect is to be executed only when count changes, so pass count as second argument in array
	return (
		<div>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}
export default EffectCounterOne
