import React from "react";
import piggy from "../assets/porco.png";
import {Checkbox, Select} from 'semantic-ui-react'

const sortOptions = [
	{key:"name", value:"name",text:"name"},
	{key:"weight",value:"weight",text:"weight"}
]

const Nav = ({handleSetShowGreased, handleSetSort}) => {
	return (
		<div className="navWrapper">
			<Checkbox toggle label="Filter Greased" onClick={handleSetShowGreased}/>
			<Select placeholder="Select sort" options={sortOptions} onChange={handleSetSort}/>
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
