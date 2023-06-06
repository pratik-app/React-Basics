import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import LComp from './components/learning';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Pratik!</h1>
        <Hello name= "First Prop"/>
        <Hello name= "Second Prop"/>
        <Hello name= "Third Prop"/>
        <LComp />
        
      </header>
    </div>
  );
}

export default App;
