import React from "react";
import "./Menu.css";

export default ({items}) => {
	return <div>{ items.map((item) => (
		<span className="link" key={item.name}>
		  <a href={item.link}>{item.name}</a>
		</span>)) 
	}</div>;
}
