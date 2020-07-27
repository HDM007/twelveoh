import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import Mcounter from './Counter';


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p> API-mounted on {currentTime}. </p>
        </div>
        <Mcounter></Mcounter>
        <Toggle></Toggle>
      </header>
    </div>
  );
}

export default App;