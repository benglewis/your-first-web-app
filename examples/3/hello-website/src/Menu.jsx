import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Menu.css";

export const Menu = ({ items, color }) => <ul className="menu">
	{ items.map(({ path, name }) => 
		<li key={ name }>
			<Link to={ path } style={ { color } }>{ name }</Link>
		</li>
	  )
	}
</ul>

const mapStateToProps = (state) => ({
  color: state.color
});
export default connect(mapStateToProps)(Menu);