import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState(null);

	let selectedClassGreen = "";
	if (color === "green") selectedClassGreen = "selected";
	let selectedClassYellow = "";
	if (color === "yellow") selectedClassYellow = "selected";
	let selectedClassRed = "";
	if (color === "red") selectedClassRed = "selected";

	return (
		<div>
			<div className="traficTop"></div>
			<div className="container-trafic">
				<div
					className={"light green " + selectedClassGreen}
					onClick={() => setColor("green")}></div>
				<div
					className={"light yellow " + selectedClassYellow}
					onClick={() => setColor("yellow")}></div>
				<div
					className={"light red " + selectedClassRed}
					onClick={() => setColor("red")}></div>
			</div>
		</div>
	);
};
