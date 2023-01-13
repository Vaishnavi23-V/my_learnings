import React from 'react'

const UserContext = React.createContext('codevolution')
//every object created using createContext method comes with provider and consumer react components
const UserProvider = UserContext.Provider 
const UserConsumer = UserContext.Consumer
//Userprovider is responsible for providing a value for all the descendant components
//UserConsumer is to consume a context value
export { UserProvider, UserConsumer }