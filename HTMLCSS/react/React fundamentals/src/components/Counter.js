import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increment(){
        this.setState(              
            {
           count: this.state.count + 1   //State object
        }, ()=>{                         //callback function
            console.log('Callback value',this.state.count) // 1- callback func console log
        })
        this.setState(prevState => ({
            count: prevState.count +1
        }))
           console.log(this.state.count) // 0- synchronous console log
    }
  render() {
    return (
        <div>
    <div>Counter-{this.state.count}</div>
    <button onClick={()=> this.Increment()}> Increment </button>
      </div>
      );
  }
}

export default Counter


