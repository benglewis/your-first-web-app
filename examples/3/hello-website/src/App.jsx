import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Header from "./Header";

const Home = () => <h2>The three little bears await</h2>;
const SmallBear = () => <h2>Welcome to the small bear's home</h2>;
const MiddleSizedBear = () => <h2>Welcome the middle sized bear's home</h2>;
const BigBear = () => <h2>Welcome the big bear's home</h2>;

const color = "#fff"; /* Delete this once you've connected to the state */

function App() {
  const pages = [
    { path: "/", name: "Home", component: Home },
    { path: "/smallBear", name: "Small Bear", component: SmallBear },
    { path: "/middleSizedBear", name: "Middle-sized Bear", component: MiddleSizedBear },
    { path: "/bigBear", name: "Big Bear", component: BigBear }
  ];

  return (
    <Router>
    <div className="App">
      <h1 className="title" style={ { color } }>Hello Website!</h1>
      <Header pages={ pages } />

      { pages.map(({ path, component }) => {
          const ifExact = path === "/" ? { exact: true } : {};

          /* Add your Route here */ return null;
        })
      }
    </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(App);
