import React from 'react';
import { connect } from "react-redux";

import "./Content.css";
import { goldilocksAction, resetAction } from "./actions/text.action";

export const Content = ({ goldilocksIsComing, resetText }) => <div className="content">
	<button onClick={ goldilocksIsComing }>Goldilocks is coming</button>
	<button onClick={ resetText }>Reset title text</button>
</div>;

const mapDispatchToProps = (dispatch) => ({
  goldilocksIsComing: () => dispatch(goldilocksAction()),
  resetText: () => dispatch(resetAction())
});

export default connect(null, mapDispatchToProps)(Content);

