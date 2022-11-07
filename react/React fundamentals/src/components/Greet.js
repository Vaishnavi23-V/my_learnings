import React from 'react'

const Greet = props => {
    //props.name='Vaishnavi'  //throws error as props are immutable
    return(
    <div>
       <h1>Hello {props.name}</h1>
       {props.children}
    </div>
    )
}
export default Greet