import React from "react";

import { useState } from "react";

import CurrentCD from "../currentCD/CurrentCD";
import Penalty from "../penalty/Penalty";
import OtherCD from "../otherCD/OtherCD";

const Calculator = () => {
	const [currentCD, setCurrentCD] = useState({
		principal: 0,
		rate: 0,
		freq: "daily",
		interest: 0,
		term: 0,
	});

	const [penalty, setPenalty] = useState({
		fee: 0,
		term: 0,
		days: true,
		simple: false,
		total: 0,
	});

	const [otherCD, setOtherCD] = useState({
		rate: 0,
		freq: "daily",
		interest: 0,
	});

	return (
		<>
			<CurrentCD currentCD={currentCD} setCurrentCD={setCurrentCD} />
			<Penalty
				penalty={penalty}
				setPenalty={setPenalty}
				currentCD={currentCD}
			/>
			<p>
				{currentCD.interest > otherCD.interest
					? `>`
					: currentCD.interest < otherCD.interest
					? `<`
					: `=`}
			</p>
			<OtherCD />
		</>
	);
};

export default Calculator;
