import React, { Component } from "react";
import "./App.css";

import AppNav from './components/AppNav';
import Albums from './container/Albums';
import Album from './container/Album';

class App extends Component {
 
  

  render() {
  return (
    <div className="App">
   
      <AppNav />
      <Album />
     
      <Albums />

      
      

   </div>
  );
}
}

export default App;
