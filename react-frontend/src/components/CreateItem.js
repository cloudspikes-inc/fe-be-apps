import React, { useState } from "react";
import { createItem } from "../api/api";

const CreateItem = ({ onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newItem = await createItem({ name });
      onAdd(newItem);
      setName("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary ms-2"
          onMouseDown={(e) => e.target.classList.add("active")}
          onMouseUp={(e) => e.target.classList.remove("active")}
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default CreateItem;