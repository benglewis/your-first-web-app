import React from 'react';
import { connect } from "react-redux";

import "./Header.css";
import Menu from "./Menu";

const colorChange = () => null; /* Delete this once you've connected to the state */

export const Header = ({ pages }) => <header className="App-header">
  <Menu items={ pages }/>
  <div className="colorPicker">
	  <label htmlFor="color">Pick font color </label>
	  <input type="color" onChange={ colorChange } name="color" id="color" />
  </div>
</header>;

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(null, mapDispatchToProps)(Header);