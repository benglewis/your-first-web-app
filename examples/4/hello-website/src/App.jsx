import React from 'react';
import { connect } from "react-redux";

import './App.css';
import Content from "./Content";

const title = "Welcome!" /* Delete this once you've connected to the state */

function App() {
  return (
    <div className="App">
      <h1 className="title">{ title }</h1>
      <Content />
    </div>
  );
}

const mapStateToProps = (state) => ({
	/* Connect this component to the Redux state replacing the title constant with the Redux title state as a prop */
});
export default connect(mapStateToProps)(App);
