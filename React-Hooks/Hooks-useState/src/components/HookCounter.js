import React, {useState} from 'react'

function HookCounter() {
//usestate hooks adds react state to functional component
/*usestate accepts initial value of state property and returns current value 
and a method which is capable of updating the state property*/
  const [count, setCount] = useState(0)  //array destructuring

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter

