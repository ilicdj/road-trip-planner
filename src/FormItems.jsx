import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function FormItems({ onAddItems }) {
  const [inputItem, setInputItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputItem) return;

    const newItem = {
      inputItem: inputItem,
      quantity: Number(quantity),
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    setInputItem("");
    setQuantity(1);
  };
  return (
    <form
      className="d-flex gap-3 justify-content-center align-items-center mt-5 p-5 text-center border border-dark"
      onSubmit={handleSubmit}
    >
      <input
        className="form_element"
        type="text"
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
      ></input>
      <select
        className="form_element"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-outline-dark">
        Add item
      </button>
    </form>
  );
}
FormItems.propTypes = {
  onAddItems: PropTypes.func.isRequired, // Add this line for prop-types validation
};
