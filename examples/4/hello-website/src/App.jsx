import React from 'react';
import { connect } from "react-redux";

import './App.css';
import Content from "./Content";

function App({ title }) {
  return (
    <div className="App">
      <h1 className="title">{ title }</h1>
      <Content />
    </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.text
});
export default connect(mapStateToProps)(App);
