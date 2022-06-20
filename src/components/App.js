import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import hogdata from "../porkers_data";
import { useState } from 'react'
import HogCardArea from "./HogCardArea";
import InfoBar from "./InfoBar";
import Filter from "./Filter";


function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortby] = useState("");
	const[hogs, setHogs] = useState(hogdata)
	const[currentHog, setCurrentHog] = useState(hogs[0])
	console.log(hogs)
	 
	function handleSetShowGreased(){
		setShowGreased(!showGreased)
	}

	function handleSetSort(e) {
		setSortby(e.target.textContent);
	}

	return (
		<div className="App">
			<Nav handleSetShowGreased={handleSetShowGreased} handleSetSort={handleSetSort}/>
			<InfoBar hogData={currentHog}/>
			<Filter/>
			<HogCardArea showGreased={showGreased}hogData={hogs} sortBy={sortBy}/>

		</div>
	);
}

export default App;
