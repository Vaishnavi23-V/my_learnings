import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import Usergreet from './components/Usergreet';
import NameList from './components/NameList'
import Form from './components/Form';
import Fragment from './components/Fragment';
import ParentComp from './components/ParentComp';
import LifecycleA from './components/LifecycleA';

class App extends Component{
  render(){
   return(
      <div className="App">
     <Form />
      </div>
 );
 }
} 
export default App;
