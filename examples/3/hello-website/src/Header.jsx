import React from 'react';
import { connect } from "react-redux";

import "./Header.css";
import Menu from "./Menu";
import { colorChangeAction } from "./actions/color.action";

export const Header = ({ pages, colorChange }) => <header className="App-header">
  <Menu items={ pages }/>
  <div className="colorPicker">
	  <label htmlFor="color">Pick font color </label>
	  <input type="color" onChange={ colorChange } name="color" id="color" />
  </div>
</header>;

const mapDispatchToProps = (dispatch) => ({
  colorChange: (event) => dispatch(colorChangeAction(event.target.value))
});

export default connect(null, mapDispatchToProps)(Header);