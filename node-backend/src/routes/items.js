const express = require("express");
const items = require("../data");

const router = express.Router();

// Get all items
router.get("/", (req, res) => res.json(items));

// Create an item
router.post("/", (req, res) => {
  const item = { id: Date.now(), ...req.body };
  items.push(item);
  res.status(201).json(item);
});

// Update an item
router.put("/:id", (req, res) => {
  const index = items.findIndex((item) => item.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Item not found");
  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

// Delete an item
router.delete("/:id", (req, res) => {
  const index = items.findIndex((item) => item.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Item not found");
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem);
});

module.exports = router;