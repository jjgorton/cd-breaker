import React from "react";

const OtherCD = ({ currentCD, penalty, otherCD, setOtherCD }) => {
	const handleChanges = (e) => {
		setOtherCD({ ...otherCD, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<h1>Other CD</h1>
			<p>
				Principle for the New CD would be ${currentCD.principal - penalty.total}
			</p>
			<form>
				<label htmlFor="fee">Minimum or Flat fee?</label>
				<label htmlFor="curr-rate">Interest Rate</label>
				<input
					type="number"
					min="0.00"
					step="0.01"
					id="cur-rate"
					name="rate"
					value={currentCD.rate}
					onChange={handleChanges}
				/>
				<label>
					Compounds Daily
					<input
						type="radio"
						id="cur-freq"
						name="freq"
						value="daily"
						checked={currentCD.freq === "daily"}
						onChange={handleChanges}
					/>
				</label>
				<label>
					Compounds Monthly
					<input
						type="radio"
						id="cur-freq"
						name="freq"
						value="monthly"
						checked={currentCD.freq === "monthly"}
						onChange={handleChanges}
					/>
				</label>
			</form>
			<p>
				Interest Earned on the Other CD for the same amount of time: $
				{otherCD.interest}
			</p>
		</div>
	);
};

export default OtherCD;
