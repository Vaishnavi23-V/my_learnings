import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
     // this.ClickHandler=this.clickHandler.bind(this)
    }
    /*ClickHandler(){
       this.setState({
            message: 'Goodbye'
        }) 
    }*/
    clickHandler=()=>{
        this.setState({
            message:'Goodbye!'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        <button onClick={()=> this.clickHandler()}> Click</button>
        <button onclick={this.clickHandler}>Click</button>
      
      </div>
    )
  }
}

export default EventBind
