import React, { useState } from "react";
import { updateItem } from "../api/api";

const UpdateItem = ({ currentItem, onUpdate, onCancel }) => {
  const [name, setName] = useState(currentItem.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedItem = await updateItem(currentItem.id, { name });
      onUpdate(updatedItem);
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary ms-2"
          onMouseDown={(e) => e.target.classList.add("active")}
          onMouseUp={(e) => e.target.classList.remove("active")}
        >
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={onCancel}
          onMouseDown={(e) => e.target.classList.add("active")}
          onMouseUp={(e) => e.target.classList.remove("active")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateItem;