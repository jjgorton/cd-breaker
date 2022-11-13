import React from "react";

import { useEffect } from "react";

const Penalty = ({ penalty, setPenalty, currentCD }) => {
	useEffect(() => {
		console.log(penalty);
	}, [penalty]);

	const handleChanges = (e) => {
		//have an option to manually input penalty or calculate it
		setPenalty({ ...penalty, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<h1>Penalty for Breaking CD before it Matures</h1>
			<form>
				<label htmlFor="fee">Minimum or Flat fee?</label>
				<input
					type="number"
					min="0.00"
					step="0.01"
					id="fee"
					name="fee"
					value={penalty.fee}
					onChange={handleChanges}
				/>

				<label htmlFor="term">
					Number of months or days of interest removed
				</label>
				<input
					type="number"
					min="0"
					id="term"
					name="term"
					value={penalty.term}
					onChange={handleChanges}
				/>

				<select name="days" onChange={handleChanges}>
					<option value={true}>Days</option>
					<option value={false}>Months</option>
				</select>
				<label>
					Simple Interest
					<input
						type="checkbox"
						id="simple"
						name="simple"
						onChange={(e) => {
							e.target.value = e.target.checked;
							handleChanges(e);
						}}
					/>
				</label>
			</form>
			<p>
				Total Penalty for breaking the CD before it matures: ${penalty.total}
			</p>
		</div>
	);
};

export default Penalty;
