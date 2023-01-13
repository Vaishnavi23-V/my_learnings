import React, { Component } from 'react'

export class Usergreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    //short circuit operator
  // return this.state.isloggedIn && <div>Welcome vaish</div>
     //ternary conditional operator
   return this.state.isLoggedIn?( //1st opeartor is evaluated to true or false
       <div>Welcome vaish</div>
       ):(
       <div>Welcome guest</div>
   )
    //element variable
   /*let message //message variable stores the element to be rendered
    if(this.state.isLoggedIn){
        message=<div>Welcome vaish</div>
    }else{
        message=<div>Welcome guest</div>
    }
    return <div>{message}</div>
    //normal if/else
    if(this.state.isLoggedIn){
        return <div>Welcome vaish</div>
        
    }else{
        return <div>Welcome guest</div>     
    } */
  }
}
export default Usergreet