import './OrderListItem.css';

export default function OrderListItem({ order , setOrder, selected }) {
  
  return (
    <div className="OrderListItem" id={selected === order && "selected"} onClick={()=>setOrder(order)}>
      <div>
        <div>Order ID: {order.orderId}</div>
        <div>{new Date(order.updatedAt).toLocaleDateString()}</div>
      </div>
      <div id="right">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div>{order.totalQty} Items</div>
      </div>
    </div>
  );
}