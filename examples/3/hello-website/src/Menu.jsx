import React from 'react';
import { connect } from "react-redux";

import "./Menu.css";

export const Menu = ({ items }) => <ul className="menu">
	{ items.map(({ path, name }) => 
		<li key={ name }>{ /* Add your Link implementation here! Don't forget to color it appropriately. */ }</li>
	  )
	}
</ul>

const mapStateToProps = (state) => ({
	/* Connect this component to the Redux state passing the Redux color state as a prop used by the links */
});
export default connect(mapStateToProps)(Menu);