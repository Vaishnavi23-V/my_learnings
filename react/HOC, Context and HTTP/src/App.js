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
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import PostForm from './PostForm';

class App extends Component{
  render(){
   return(
      <div className="App">
     <ClickCounter/>
     <HoverCounter />
     <UserProvider value= "Vaishnavi">  
      <ComponentC />
     </UserProvider>
     {/*PostList */}
     <PostForm />
      </div>
 );
 }
} 
export default App;
