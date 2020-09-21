import React from 'react';
import './App.css';
// import ClassComponent from './component/classComponent';
import Counter from './component/counter';
import FirstLastName from './component/firstAndLastName';
import UseEffect from './component/useEffect';

function App() {
  return (
    <div className="App">
      <Counter/>   
      <br />
      <hr />
      <FirstLastName/> 
      <br />
      <hr />
      <UseEffect/>  
      <br />
      <hr />
      
    </div>
  );
}

export default App;
