import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
	const [items, setItems] = useState(itemData);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [search, setSearch] = useState("");

	
	const filterItems = items.filter((data) =>
		data.name.toLowerCase().includes(search.toLowerCase())
	);

	const itemsToDisplay = filterItems.filter((item) => {
		if (selectedCategory === "All") return true;

		return item.category === selectedCategory;
	});

    function handleCategoryChange(event) {
		setSelectedCategory(() => event.target.value);
	}
        
	function handleSearch(search) {
		setSearch(search);
	}

	function handleNewItem(newItem) {
		const addedItem = [...itemsToDisplay, newItem];
		setItems(addedItem);
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
					<Item
						key={item.id}
						name={item.name}
						search={search}
						category={item.category}
					/>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
