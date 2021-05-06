import './OrderListItem.css';

export default function OrderListItem({ order , setOrder}) {
  return (
    <div className="OrderListItem" onClick={()=>setOrder(order)}>
      <div>{order.totalQty} Items</div>
      <div>Order ID:{order.orderId}</div>
      <div>${order.orderTotal.toFixed(2)}</div>
    </div>
  );
}