import React from 'react'

const Hello = () => {
  /*  return(
        <div className='newClass'>
            <h1>hello vaishnavi</h1>
        </div>
    )*/
    return React.createElement(
        'div',
        {id:'hello', className: 'newClass'},
        React.createElement('h1','null','Hello vaishnavi')
    )
    }

export default Hello;