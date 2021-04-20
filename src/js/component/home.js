import React, { useState } from "react";

//create your first component
export default class Home extends React.Component {
	constructor() {
		super();
		const [color, setColor] = useState("");
		this.state = {
			onLight: null
		};
	}
	render() {
		let selectedClassGreen = "";
		if (this.state.onLight === "green") selectedClassGreen = " selected";
		let selectedClassYellow = "";
		if (this.state.onLight === "yellow") selectedClassYellow = " selected";
		let selectedClassRed = "";
		if (this.state.onLight === "red") selectedClassRed = " selected";
		return (
			<div>
				<div className="traficTop"></div>
				<div className="container-trafic">
					<div
						className={"light green" + selectedClassGreen}
						onClick={() =>
							this.setState({ onLight: "green" })
						}></div>
					<div
						className={"light yellow" + selectedClassYellow}
						onClick={() =>
							this.setState({ onLight: "yellow" })
						}></div>
					<div
						className={"light red" + selectedClassRed}
						onClick={() => this.setState({ onLight: "red" })}></div>
				</div>
			</div>
		);
	}
}
