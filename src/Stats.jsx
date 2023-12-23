import PropTypes from "prop-types"; // Import PropTypes
export default function Stats({ items }) {
  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPacked / numItems) * 100);
  if (!items.length)
    return (
      <p className="border border-dark p-5 mt-5 w-50 text-center mb-5">
        Still no items
      </p>
    );
  if (percentage === 100)
    return (
      <p className="border border-dark p-5 mt-5 w-50 text-center mb-5">
        All done
      </p>
    );
  return (
    <div className="border border-dark p-5 mt-5 w-50 text-center mb-5">
      You have {numItems} items on your list, and you already packed{" "}
      {numOfPacked} ({percentage}%)
    </div>
  );
}
Stats.propTypes = {
  items: PropTypes.array.isRequired,
};
