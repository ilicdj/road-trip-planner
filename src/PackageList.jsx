import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
export default function PackageList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("order");
  let sortedItems;
  if (sortBy === "order") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items
      .slice()
      .sort((a, b) => a.inputItem.localeCompare(b.inputItem));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="mt-5">
      <div className="border border-dark p-5 d-flex justify-content-around align-items-center package_list">
        <ul className="list-unstyled d-flex flex-column">
          {sortedItems.map((item) => (
            <Item
              item={item}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
              onClearList={onClearList}
              key={item.id}
            />
          ))}
        </ul>
        <div className="manage_items d-flex">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="order">Sort by input order</option>
            <option value="name">Sort by input name</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            className="btn btn-outline-dark ms-5"
            onClick={() => onClearList()}
          >
            Clear List
          </button>
        </div>
      </div>
    </div>
  );
}
function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className="d-flex justify-content-between">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <label style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.inputItem}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

PackageList.propTypes = {
  items: PropTypes.array.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onClearList: PropTypes.func.isRequired,
};
Item.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
    inputItem: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onClearList: PropTypes.func.isRequired,
};
