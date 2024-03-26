import React, { useState } from "react";
import "./Style.css";

const Generate = () => {
	const [programDetails, setProgramDetails] = useState({
		name: "",
		description: "",
		instructions: "",
		code: "",
		level: "EASY",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProgramDetails({ ...programDetails, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(programDetails);
	};

	return (
		<div className="form-container">
			<div className="section-title">Parson Problem Generator</div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-group">
					<label>
						Name of the program:
						<input
							type="text"
							name="name"
							value={programDetails.name}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						Description of the program:
						<textarea
							name="description"
							value={programDetails.description}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						Instructions of the program:
						<textarea
							name="instructions"
							value={programDetails.instructions}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						Program code:
						<textarea
							name="code"
							value={programDetails.code}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className="form-group">
					<label>
						Level:
						<select
							name="level"
							value={programDetails.level}
							onChange={handleChange}>
							<option value="EASY">Easy</option>
							<option value="MEDIUM">Medium</option>
							<option value="HARD">Hard</option>
						</select>
					</label>
				</div>
				<center><button type="submit">Submit</button></center>
			</form>
		</div>
	);
};

export default Generate;
