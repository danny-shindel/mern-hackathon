import './OrderListItem.css';

export default function OrderListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="OrderListItem">
      <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}