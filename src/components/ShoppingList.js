import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
	const [items, setItems] = useState(itemData);
	const [selectedCategory, setSelectedCategory] = useState("All");

	function handleCategoryChange(event) {
		setSelectedCategory(() => event.target.value);
	}

	const itemsToDisplay = items.filter((item) => {
		if (selectedCategory === "All") return true;

		return item.category === selectedCategory;
	});

	function handleSearch(search) {
		const filterItems = itemsToDisplay.filter((data) =>
			data.name.includes(search)
		);
		setItems(() => filterItems);
	}

	function handleNewItem(newItem) {
		setItems(() => [...itemsToDisplay, newItem]);
	}

	return (
		<div className="ShoppingList">
			<ItemForm onItemFormSubmit={handleNewItem} />
			<Filter
				onSearchChange={handleSearch}
				onCategoryChange={handleCategoryChange}
			/>
			<ul className="Items">
				{itemsToDisplay.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
