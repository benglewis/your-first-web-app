import React from 'react';
import { connect } from "react-redux";

import "./Content.css";

const goldilocksIsComing = () => null; // Delete when you implement the dispatch replacing this
const resetText = () => null;

export const Content = ({ goldilocksIsComing, resetText }) => <div className="content">
	<button onClick={ goldilocksIsComing }>Goldilocks is coming</button>
	<button onClick={ resetText }>Reset title text</button>
</div>;

const mapDispatchToProps = (dispatch) => ({

});

export default connect(null, mapDispatchToProps)(Content);

