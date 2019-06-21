import React from 'react';
import './App.css';

const Menu = () => null;

function App() {
  const CHANGE_NAME_FUNCTION = () => {};
  const name = "DEFAULT NAME";

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
      <input type="text" onChange={
        CHANGE_NAME_FUNCTION
        /** 
          Hint: Replace the `CHANGE_NAME_FUNCTION` handler with your own React _state hook_ 
          which will update the `name` variable.
        **/
      }/>
      </header>
    </div>
  );
}

export default App;
