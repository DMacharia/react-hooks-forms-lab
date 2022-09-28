import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
	const [formData, setFormData] = useState({
		category: "Produce",
		name: "",
		id: uuid(),
	});

	function handleSubmit(e) {
		e.preventDefault();
		onItemFormSubmit(formData);
	}

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	return (
		<form onSubmit={handleSubmit} onChange={handleChange} className="NewItem">
			<label>
				Name:
				<input defaultValue={formData.name} type="text" name="name" />
			</label>

			<label>
				Category:
				<select defaultValue={formData.category} name="category">
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</label>

			<button type="submit">Add to List</button>
		</form>
	);
}

export default ItemForm;
