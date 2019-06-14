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

});
export default connect(mapStateToProps)(Menu);