import './OrderListItem.css';

export default function OrderListItem({ order }) {
  return (
    <div className="OrderListItem" >
      <div>{order.totalQty} Items</div>
      <div>Order ID:{order.orderId}</div>
      <div>${order.orderTotal.toFixed(2)}</div>
    </div>
  );
}