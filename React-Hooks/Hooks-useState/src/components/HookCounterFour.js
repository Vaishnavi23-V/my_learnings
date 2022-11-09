import React, { useState } from 'react'

function HookCounterFour() {
	const [items, setItems] = useState([]) //first iteration empty array, so length is 0

	const addItem = () => {
		setItems([
			...items, //make a copy of all items in the array with spread operator
            //To the list of copied items, append another object
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		])
	}
	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour
