import React from "react";

const CurrentCD = ({ currentCD, setCurrentCD }) => {
	const handleChanges = (e) => {
		setCurrentCD({ ...currentCD, [e.target.name]: e.target.value });
	};

	return (
		<div className="currentCD">
			<h1>Current CD</h1>
			<form>
				<label htmlFor="curr-principal">Principal</label>
				<input
					type="number"
					min="0.00"
					step="0.01"
					id="cur-principal"
					name="principal"
					value={currentCD.principal}
					onChange={handleChanges}
				/>

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
				<label htmlFor="curr-term">Maturation Date</label>
				<input
					type="date"
					id="cur-term"
					name="term"
					value={currentCD.term}
					onChange={handleChanges}
				/>
			</form>
			<p>
				Interest Earned from now till the end of the term: ${currentCD.interest}
			</p>
		</div>
	);
};

export default CurrentCD;
