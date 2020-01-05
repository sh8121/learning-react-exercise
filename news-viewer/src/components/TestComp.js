import React, { Component } from "react";

// const TestComp = () => {
// 	console.log("아아아아");
// 	return null;
// };

class TestComp extends Component {
	constructor(props) {
		super(props);
		console.log("constructor");
	}

	render() {
		console.log("render");
		return null;
	}

	componentDidMount() {
		console.log("componentDidMount");
	}
}

export default TestComp;
