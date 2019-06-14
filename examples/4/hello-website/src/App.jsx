import React from 'react';
import { connect } from "react-redux";

import './App.css';
import Content from "./Content";

const title = "Welcome!"

function App() {
  return (
    <div className="App">
      <h1 className="title">{ title }</h1>
      <Content />
    </div>
  );
}

const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(App);
