import React, { useState, useEffect } from "react";
import CreateItem from "./components/CreateItem";
import ItemList from "./components/ItemList";
import UpdateItem from "./components/UpdateItem";
import { fetchItems } from "./api/api";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadItems = async () => {
    setLoading(true);
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/items/${id}`, {
        method: "DELETE",
      });
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="container">
      <h1>Item Management App</h1>
      {editingItem ? (
        <UpdateItem
          currentItem={editingItem}
          onUpdate={handleUpdateItem}
          onCancel={() => setEditingItem(null)}
        />
      ) : (
        <CreateItem onAdd={handleAddItem} />
      )}
      <div className="refresh-container">
        <h3>Item List</h3>
        <button onClick={loadItems} className="btn btn-primary">
          {loading ? "⌛ Loading..." : "Refresh"}
        </button>
      </div>
      <ItemList items={items} onEdit={setEditingItem} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;