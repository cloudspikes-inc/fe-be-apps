import React from "react";

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>{item.name}</span>
          <div>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => onEdit(item)}
              onMouseDown={(e) => e.target.classList.add("active")}
              onMouseUp={(e) => e.target.classList.remove("active")}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(item.id)}
              onMouseDown={(e) => e.target.classList.add("active")}
              onMouseUp={(e) => e.target.classList.remove("active")}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;