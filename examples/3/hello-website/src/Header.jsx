import React from 'react';
import { connect } from "react-redux";

import "./Header.css";
import Menu from "./Menu";

const colorChange = () => null; /* Delete this once you've connected to the state */

export const Header = ({ pages }) => <header className="App-header"> /* Don't forget the prop */
  <Menu items={ pages }/>
  <div className="colorPicker">
	  <label htmlFor="color">Pick font color </label>
	  <input type="color" onChange={ colorChange } name="color" id="color" />
  </div>
</header>;

const mapDispatchToProps = (dispatch) => ({
  /* Connect your component to the Redux dispatch here */
});

export default connect(null, mapDispatchToProps)(Header);