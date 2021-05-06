import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders }) {
  const items = orders.map(item =>
    <OrderListItem
      key={item._id}
      order={item}
    />
  );
  return (
    <main className="OrderList">
      {items}
    </main>
  );
}