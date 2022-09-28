import React, { useState } from "react";

function Filter({ onCategoryChange, onSearchChange }) {
	const [search, setSearch] = useState("testing");

	function handleChange(e) {
		setSearch(() => e.target.value);
		onSearchChange(search);
	}

	return (
		<div className="Filter">
			<input
				value={search}
				type="text"
				onChange={handleChange}
				name="search"
				placeholder="Search..."
			/>
			<select name="filter" onChange={onCategoryChange}>
				<option value="All">Filter by category</option>
				<option value="Produce">Produce</option>
				<option value="Dairy">Dairy</option>
				<option value="Dessert">Dessert</option>
			</select>
		</div>
	);
}

export default Filter;
