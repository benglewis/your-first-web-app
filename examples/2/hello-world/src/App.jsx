import React, { useState } from 'react';
import './App.css';
import Menu from "./Menu";

function App() {
  const [name, changeName] = useState("No-Name");

  return (
    <div className="App">
      <header className="App-header">
        <Menu items={
          [
            { link: "http://google.com", name: "Google" },
            { link: "http://apple.com", name: "Apple" }
          ]
        }/>
      <h1>Hello {name}</h1>
      <p>Name:</p>
      <input type="text" onChange={(event) => changeName(event.target.value)}/>
      </header>
    </div>
  );
}

export default App;
