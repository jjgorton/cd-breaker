import React from "react";

const Penalty = ({ penalty, setPenalty, currentCD }) => {
	const handleChanges = (e) => {
		//calculate term for days vs months
		//have an option to manually input penalty or calculate it
		setPenalty({ ...penalty, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<h1>Penalty for Breaking CD before it</h1>
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

				<select>
					<option>Days</option>
					<option>Months</option>
				</select>
				<label>
					Simple Interest
					<input
						type="checkbox"
						id="simple"
						name="simple"
						value="true"
						onChange={handleChanges}
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
